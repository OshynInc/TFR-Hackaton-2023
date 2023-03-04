import { Text, Field, RichText } from '@sitecore-jss/sitecore-jss-nextjs';

type PopUpProps = {
  fields: {
    Header: Field<string>,
    Content: Field<string>  
  };
}

const PopUp = (props: PopUpProps): JSX.Element => (
	
  <div>
    Pop Up
	
  </div>
);

export default PopUp;