/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function Button(props) {
  let bg;
  if (props.type === 'primary') {
    bg = '#074EE8';
  } else if ( props.type === 'secondary') {
    bg = '#07A4E8';
  }
  return (
    <button
      css={css`
        background-color: ${bg};
        width: 171.19px;
        height: 50px;
        border-radius: 4px;
        padding: 16px 0;
        color: #FFFFFF;
        font-family: "Sarabun";
        font-weight: 400;
        display: flex;
        align-items: center;
        justify-content: center;
      `}
     >Button</button>
  )
}

export default Button
