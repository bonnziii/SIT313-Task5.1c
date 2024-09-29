// ArticleForm.js
import React from 'react';
import { Form, TextArea } from 'semantic-ui-react';

const ArticleForm = () => (
  <>
    <Form.Field>
      <label>Title</label>
      <Form.Input 
        placeholder="Enter an eye-catching title" 
        style={{ color: '#333', fontFamily: 'Arial, sans-serif' }}
      />
    </Form.Field>
    <Form.Field>
      <label>Abstract</label>
      <TextArea 
        placeholder="Provide a concise summary of your article" 
        style={{ minHeight: '120px', color: '#333' }}
      />
    </Form.Field>
    <Form.Field>
      <label>Article Content</label>
      <TextArea 
        placeholder="Share the full content of your article" 
        style={{ minHeight: '240px', color: '#333' }}
      />
    </Form.Field>
    <Form.Field>
      <label>Tags</label>
      <Form.Input 
        placeholder="Add relevant tags to describe your article" 
        style={{ color: '#333', fontFamily: 'Arial, sans-serif' }}
      />
    </Form.Field>
  </>
);

export default ArticleForm;
