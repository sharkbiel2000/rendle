import { TextInput } from 'react-native';

export default function Input(props) {
  return (
<TextInput 
placeholder={props.nome}
backgroundColor={props.cor}
style={{ borderRadius: 5 }}
 />
  );
}