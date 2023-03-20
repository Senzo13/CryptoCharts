export function convertDateWithValue(value: string) {
  console.log("ma valeur : " + value);
  if (value.includes("Min")) {
    value = value.replace("Min", "");
    return new Date(
      new Date().setMinutes(new Date().getMinutes() - Number(value))
    );
  } else if (value.includes("Hour")) {
    value = value.replace("Hour", "");
    return new Date(new Date().setHours(new Date().getHours() - Number(value)));
  } else if (value.includes("Day")) {
    value = value.replace("Day", "");
    return new Date(new Date().setDate(new Date().getDate() - Number(value)));
  } else if (value.includes("Sec")) {
    value = value.replace("Sec", "");
    return new Date(
      new Date().setSeconds(new Date().getSeconds() - Number(value))
    );
  }
}
