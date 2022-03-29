import { Message } from '../../interfaces/InterfaceChat';
export declare const usePost: (url: string) => {
    post: (body: Message) => Promise<any>;
    postFile: (body: Message) => Promise<any>;
    data: null;
    loading: boolean;
    error: null;
};
