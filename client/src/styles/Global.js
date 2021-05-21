import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
 html{
   margin: auto;
   max-width: 1200px;
   background: ${({ theme }) => theme.mycolors.background};
   color: ${({ theme }) => theme.mycolors.alltext};
 }
 main{
   margin-top: 3rem;
 }


/*for toggle-knappen*/
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
cursor: pointer;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.mycolors.boxes};
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: ${({ theme }) => theme.colors.black};
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: ${({ theme }) => theme.colors.white};
}

input:focus + .slider {
  box-shadow: 0 0 1px ${({ theme }) => theme.shift.background};
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
`;
