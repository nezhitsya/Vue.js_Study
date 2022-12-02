import Vue from 'vue'
import Vuex from 'vuex'
// import * as getters from './getters'
// import * as mutations from './mutations'
import todoApp from './modules/todoApp'

Vue.use(Vuex);

// const storage = {
//     fetch() {
//         const arr = [];

//         if (localStorage.length > 0) {
//             for (let i = 0; i < localStorage.length; i++) {
//                 if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
//                     //   this.todoItems.push(localStorage.key(i)); 
//                     arr.push(
//                         JSON.parse(localStorage.getItem(localStorage.key(i)))
//                     );
//                 }
//                 // console.log(localStorage.key(i));
//             }
//         }
//         return arr;
//     },
// }

export const store = new Vuex.Store({
    // state: {
    //     // headerText: "TODO it!"
    //     todoItems: storage.fetch()
    // },
    // getters: {
    //     storedTodoItems(state) {
    //         return state.todoItems;
    //     }
    // },
    // mutations: {
    //     addOneItem(state, todoItem) {
    //         const obj = { completed: false, item: todoItem };
    //         // 저장하는 로직
    //         localStorage.setItem(todoItem, JSON.stringify(obj));
    //         state.todoItems.push(obj);
    //     },
    //     removeOneItem(state, payload) {
    //         localStorage.removeItem(payload.todoItem.item);
    //         state.todoItems.splice(payload.index, 1);
    //     },
    //     toggleOneItem(state, payload) {
    //         state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
    //         // localStorage 데이터 갱신
    //         localStorage.removeItem(payload.todoItem.item);
    //         localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
    //     },
    //     clearAllItems(state) {
    //         localStorage.clear();
    //         state.todoItems = [];
    //     },
    // }

    // getters: getters,
    // mutations: mutations
    // getters,
    // mutations

    modules: {
        todoApp
    }
});