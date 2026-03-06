import user from './userAuth.js'
import { handleDelete as hDelete,handleEdit,handleDisplay } from './handlers.js';
import data, { message1, message2 } from './test.js';

console.log(user);

hDelete();
handleEdit();

console.log(message1);
console.log(message2);
console.log(data);
