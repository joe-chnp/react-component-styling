/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';


function Alert(props) {
  let bg;
  let img;
  if (props.type === 'error') {
    bg = '#F9C8C8';
    img = '../../public/errorAlert.svg';
  } else if(props.type === 'warning') {
    bg = '#F9D9C8';
    img = '../../public/warningAlert.svg';
  } else if(props.type === 'info') {
    bg = '#F9EBC8';
    img = '../../public/infoAlert.svg';
  } else if(props.type === 'success') {
    bg = '#CEF7CD';
    img = '../../public/successAlert.svg';
  }; 
  
  return (
    <div 
      css={css`
        background-color: ${bg};
        width: 650px;
        height: 76px;
        border-radius: 10px;
        font-size: 20px;
        color: #444444;
        display: flex;
        align-items: center;
        gap: 15px;
        padding-left: 20px;
        box-sizing: border-box;
        font-family: "Kanit";
        font-weight: 700;
      `}
    >
      <img src={img}/>
      <span>This is {props.type} alert box</span>
    </div>
  )
}

export default Alert
