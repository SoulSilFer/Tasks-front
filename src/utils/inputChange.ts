export const HandleBaseInputChange = <T extends object>(
  event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  values: T,
  setValues: React.Dispatch<React.SetStateAction<T>>
) => {
  setValues({
    ...values,
    [event.target.name]: event.target.value,
  });
};
