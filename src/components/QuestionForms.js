// QuestionForm.js
import React from 'react';
import { Form, TextArea } from 'semantic-ui-react';

const QuestionForm = () => (
  <>
    <Form.Field>
      <label>Title</label>
      <Form.Input 
        placeholder="Start your question with how, what, why, etc." 
        style={{ color: '#333', fontFamily: 'Arial, sans-serif' }}
      />
    </Form.Field>
    <Form.Field>
      <label>Describe your problem</label>
      <TextArea 
        placeholder="Describe your problem in detail" 
        style={{ minHeight: '200px', color: '#333' }}
      />
    </Form.Field>
    <Form.Field>
      <label>Tags</label>
      <Form.Input 
        placeholder="Add up to 3 relevant tags" 
        style={{ color: '#333', fontFamily: 'Arial, sans-serif' }}
      />
    </Form.Field>
  </>
);

export default QuestionForm;
