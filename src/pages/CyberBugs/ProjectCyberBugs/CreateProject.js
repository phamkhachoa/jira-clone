import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Form, Input, Select, Button, message } from 'antd';
import { Editor, EditorState, convertToRaw } from 'draft-js';
import "draft-js/dist/Draft.css";
import { cyberbugsService } from '../../../services/CyberbugsService';

export default function CreateProject() {
    const [projectCategories, setProjectCategories] = useState([]);
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
    const editorRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();

    // Lấy danh mục project
    const fetchAllProjectCategory = useCallback(async () => {
        try {
            const res = await cyberbugsService.getAllProjectCategory();
            setProjectCategories(res.data.content);
        } catch (error) {
            console.error("Failed to fetch project categories:", error);
        }
    }, []);

    useEffect(() => {
        fetchAllProjectCategory();
    }, [fetchAllProjectCategory]);

    // Focus editor
    const focusEditor = () => {
        if (editorRef.current) editorRef.current.focus();
    };

    // Cập nhật editor state + cập nhật giá trị form field description
    const handleEditorChange = (newState) => {
        setEditorState(newState);
        const contentState = newState.getCurrentContent();
        const rawContent = JSON.stringify(convertToRaw(contentState));
        form.setFieldsValue({ description: rawContent });
    };

    // Submit form handler
    const onFinish = async (values) => {
        setLoading(true);
        try {
            console.log(values)
            await cyberbugsService.createProject(values);
            message.success("Project created successfully!");
            form.resetFields();
            setEditorState(EditorState.createEmpty());
        } catch (error) {
            console.error(error);
            message.error("Failed to create project.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Form
                form={form}
                name="create-project"
                style={{ width: 600 }}
                layout="vertical"
                autoComplete="off"
                onFinish={onFinish}
            >
                <h2>Project Details</h2>

                <Form.Item
                    label="Name"
                    name="name"
                    hasFeedback
                    rules={[
                        { required: true, message: "Please enter project name" },
                        { max: 50, message: "Name cannot exceed 50 characters" },
                    ]}
                >
                    <Input placeholder="Project Name" />
                </Form.Item>

                <Form.Item
                    label="URL"
                    name="url"
                    hasFeedback
                    rules={[
                        { required: true, message: "Please enter project URL" },
                        { type: "url", message: "Please enter a valid URL" },
                    ]}
                >
                    <Input placeholder="Project URL" />
                </Form.Item>

                <Form.Item
                    label="Description"
                    name="description"
                    rules={[
                        { required: true, message: "Please enter project description" },
                        {
                            validator: (_, value) =>
                                value && value !== JSON.stringify(convertToRaw(EditorState.createEmpty().getCurrentContent()))
                                    ? Promise.resolve()
                                    : Promise.reject(new Error("Description cannot be empty")),
                        },
                    ]}
                >
                    <div
                        onClick={focusEditor}
                        style={{
                            border: '1px solid #d9d9d9',
                            borderRadius: 2,
                            padding: '4px 11px',
                            minHeight: 100,
                            cursor: 'text',
                        }}
                    >
                        <Editor
                            ref={editorRef}
                            editorState={editorState}
                            onChange={handleEditorChange}
                        />
                    </div>
                </Form.Item>

                <Form.Item
                    label="Project Category"
                    name="categoryId"
                    hasFeedback
                    rules={[{ required: true, message: 'Please select a project category' }]}
                >
                    <Select
                        showSearch
                        placeholder="Select a project category"
                        optionFilterProp="label"
                        options={projectCategories.map(({ id, projectCategoryName }) => ({
                            value: id,
                            label: projectCategoryName,
                        }))}
                        filterOption={(input, option) =>
                            option?.label.toLowerCase().includes(input.toLowerCase())
                        }
                    />
                </Form.Item>

                <Button type="primary" htmlType="submit" loading={loading}>
                    Save changes
                </Button>
            </Form>
        </div>
    );
}
