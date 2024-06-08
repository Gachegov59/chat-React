import { AxiosError } from 'axios';

import toast from 'react-hot-toast';

// const notify = (data: string) => toast(data);
export const message = (message: string) => toast(message);
export const messageError = (message: string) => toast.error(message);

export const errorMessage = (error: AxiosError) =>
  toast.error(JSON.stringify(error), {
    style: {
      width: '4000px !important',
    },
    className: 'bg-orange-900',
  });



export const successMessage = (message: string) =>
  toast.success(message, {
    style: {
      width: '4000px !important',
    },
    className: 'bg-orange-900',
  });
