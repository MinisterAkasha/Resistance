// import { rootApi, socketEmitAsPromise, socketListenAsPromise } from 'shared/api';
// import { USER_ID_LC_KEY, USER_NICKANME_LC_KEY } from 'shared/consts/user';
// import { getSocket } from 'shared/socket';

// export const eventAuthApi = rootApi.injectEndpoints({
//     overrideExisting: true,
//     endpoints: (build) => ({
//         auth: build.query<void, void>({
//             queryFn: async () => {
//                 const socket = getSocket();

//                 const userNickname = localStorage.getItem(USER_NICKANME_LC_KEY);
//                 const userid = localStorage.getItem(USER_ID_LC_KEY);

//                 return new Promise((resolve) => {
//                     socket.on('connect', () => {
// 						// socket.emit();
//                         resolve();
//                     });
//                 });
//             },
//             async onCacheEntryAdded(arg, { updateCachedData, cacheDataLoaded, cacheEntryRemoved }) {
//                 // const socket = getSocket();
//                 // const listener = (data: MessageType[]) => {
//                 //     updateCachedData(() => {
//                 //         return data;
//                 //     });
//                 // };
//                 // try {
//                 //     await cacheDataLoaded;
//                 //     socket.on(ChatEvents.GET_MESSAGES, listener);
//                 // } catch (err) {
//                 //     console.error(err);
//                 // }
//                 // await cacheEntryRemoved;
//                 // socket.removeListener(ChatEvents.GET_MESSAGES, listener);
//             },
//         }),
//         // sendUserData: build.mutation<void, User>({
//         //     queryFn: async (userData) => {
//         //         return socketEmitAsPromise(UserEvents.SEND_USER_DATA, userData);
//         //     },
//         // }),
//     }),
// });

// // export const { useSendUserDataMutation } = eventAuthApi;
