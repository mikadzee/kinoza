export interface MessageValid {
  success: boolean;
  message?: string;
}

export interface DataForm {
  type?: 'register';
  name?: string;
  confirmPassword?: string;
  password: string;
  email: string;
  checkbox: boolean;
}

export function validForm(data: DataForm): MessageValid{
  if(!data.email) return {success: false, message: 'Отсутствует email!'};
  if(!data.password) return {success: false, message: 'Отсутствует пароль!'};

  if(data.type === 'register'){
    if(!data.name) return {success: false, message: 'Отсутствует имя!'};
    if(data.name.length < 2) return {success: false, message: 'Слишком короткое имя!'};
    if(data.confirmPassword !== data.password) return {success: false, message: 'Пароли не совпадают!'};
  }

  if(data.password.length < 6) return {success: false, message: 'Слишком короткий пароль!'};

  return {success: true}
}