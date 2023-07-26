import React, { useState, useRef } from 'react';
import '../styles/postblog.css';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw } from 'draft-js';
const BlogForm = () => {
  const [primaryImage, setPrimaryImage] = useState(null);
  const [secondaryImage, setSecondaryImage] = useState(null);
  const [titleText, setTitleText] = useState('');

  const primaryImageInputRef = useRef(null);
  const secondaryImageInputRef = useRef(null);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleEditorChange = (state) => {
    setEditorState(state);
  };
  const handlePrimaryImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const image = new Image();
        image.src = reader.result;
        image.onload = () => {
          if (image.width > 400 || image.height > 400) {
            alert('Please resize the image to 400x400 pixels or below.');
            primaryImageInputRef.current.value = '';
            return;
          }
          setPrimaryImage(reader.result);
        };
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSecondaryImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const image = new Image();
        image.src = reader.result;
        image.onload = () => {
          if (image.width > 400 || image.height > 400) {
            alert('Please resize the image to 400x400 pixels or below.');
            secondaryImageInputRef.current.value = '';
            return;
          }
          setSecondaryImage(reader.result);
        };
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTitleTextChange = (event) => {
    setTitleText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const contentState = editorState.getCurrentContent();
    const contentRaw = convertToRaw(contentState);
    console.log('Submitted data:', {
      primaryImage,
      secondaryImage,
      titleText,
      contentRaw, 
    });
  };


  return (
    <div className="blog-form-container mt-4 text-left">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="primaryImage">Primary Image:</label>
          <input
            type="file"
            className="form-control"
            id="primaryImage"
            accept="image/*"
            onChange={handlePrimaryImageChange}
            required
            ref={primaryImageInputRef}
          />
          {primaryImage && (
            <img
              className="uploaded-image"
              src={primaryImage}
              alt="Primary Image"
            />
          )}
        </div>

        <div className="form-group">
          <label htmlFor="secondaryImage">Secondary Image:</label>
          <input
            type="file"
            className="form-control"
            id="secondaryImage"
            accept="image/*"
            onChange={handleSecondaryImageChange}
            required
            ref={secondaryImageInputRef}
          />
          {secondaryImage && (
            <img
              className="uploaded-image"
              src={secondaryImage}
              alt="Secondary Image"
            />
          )}
        </div>

        <div className="form-group">
          <label htmlFor="Title">Title:</label>
          <textarea
            id="TitleText"
            value={titleText}
            onChange={handleTitleTextChange}
            className="form-control"
            placeholder="Enter your Title here"
            required
          />
        </div>

            
          <label htmlFor="blogText">Blog Text:</label>
         
          <div className="blog-text-container">
          <Editor
            editorState={editorState}
            onEditorStateChange={handleEditorChange}
            
            placeholder="Enter your blog text here"
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
          />
          </div>
        
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BlogForm;
