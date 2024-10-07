export const LoginValidation = {
  required: "Обязательно для заполнения",
  validate: (value: string): true | string => {
    if (value.match(/[а-яА-Я]/)) {
        return 'Логин не должен содержать русские буквы'
    }
    return true
  },
};

export const passwordValidation = {
    required: "Обязательно для заполнения",
    validate: (value: string): true | string => {
      if (value.length < 6) {
          return 'Пароль должен содержать больше 6 символов'
      }
      return true
    },
  };
