export interface ValidationMessages {
  city?: Array<TypesAndMessages>;
  units?: Array<TypesAndMessages>;
}

export interface TypesAndMessages {
  type: string;
  message: string;
}

export const Messages = {
  required: 'Field is required',
  stringOnly: 'Field should contain only letters',
};
