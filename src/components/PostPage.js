// PostPage.js
import React, { useState } from 'react';
import { Button, Form, Segment, Header, Radio } from 'semantic-ui-react';
import QuestionForm from './QuestionForms';
import ArticleForm from './ArticleForm';
import '../styles/PostPage.css'; 

const PostPage = () => {
  const [postType, setPostType] = useState('question'); 

  const handlePostTypeChange = (e, { value }) => {
    setPostType(value);
  };

  return (
    <div className="PostPage">
      <Segment>
        <Header as="h3">Create a New Post</Header>
        <Form>
          <Form.Field>
            <label>Select Post Type:</label>
            <div className="RadioGroup">
              <Radio
                label='Question'
                name='postType'
                value='question'
                checked={postType === 'question'}
                onChange={handlePostTypeChange}
              />
              <Radio
                label='Article'
                name='postType'
                value='article'
                checked={postType === 'article'}
                onChange={handlePostTypeChange}
              />
            </div>
          </Form.Field>

          <Header as="h4">What do you want to ask or share?</Header>
          <p>If posting a question, please provide details and tags to help others assist you.</p>

          {postType === 'question' ? (
            <QuestionForm />
          ) : (
            <ArticleForm />
          )}

          <Button type='submit'>
            Post
          </Button>
        </Form>
      </Segment>
    </div>
  );
};

export default PostPage;
