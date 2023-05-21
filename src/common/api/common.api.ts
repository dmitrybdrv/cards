import axios from 'axios'

/**
 * Instance - Экземпляр объекта Axios с заданными настройками.
 * @property {string} baseURL - URL адрес сервера, к которому будет происходить обращение.
 * @property {boolean} withCredentials - Флаг, указывающий, должны ли отправляться данные аутентификации (например, куки) вместе с запросом.
 */
export const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true,
})
/*
process.env.NODE_ENV === 'development' ? 'http://localhost:7542/2.0/' : */
