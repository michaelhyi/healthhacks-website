type SetStringValue = React.Dispatch<React.SetStateAction<string>>;

export const updateStringValue = (value: string | string[] | undefined, setValue : SetStringValue) => {
    if (!value){
        return ;
    }
    else if (Array.isArray(value)) {
      // Handle the case when value is a string array
      // You can use the first element or join the elements, depending on your use case
      setValue(value[0]);
    } else {
      // Set the value directly when it's a string
      setValue(value);
    }
  };