import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChrakaInputProps,
} from '@chakra-ui/react';

interface InputProps extends ChrakaInputProps {
  name: string;
  label?: string;
}

export function Input({ name, label, ...rest }: InputProps) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <ChakraInput
        name="email"
        type="email"
        id={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: 'gray.900',
        }}
        size="lg"
        placeholder="E-mail"
        {...rest}
      />
    </FormControl>
  );
}
