const REQUIRED_FIELD = "Введите ваш логин";

export const loginValidation = {
  required: REQUIRED_FIELD,
  validate: (value: string) => {
    if (value.match(/[а-яА-Я]/)) {
      return "Логин не может содержать русские буквы";
    } else if (value.match(/[!@#$%^&*()!"№;%:?*]/)) {
      return "Логин не может содержать символы";
    }
    return true;
  },
};

export const passwordValidation = {
  required: REQUIRED_FIELD,
  validate: (value: string) => {
    if (value.length < 6) {
      return "Пароль не может быть меньше 6 символов";
    }
    return true;
  },
};
