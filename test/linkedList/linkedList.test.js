import LinkedList from '../../code/struction/linkedList/linkedList.js';

const link = new LinkedList();
test(`linked list should be ['jay', 'jolin', 'jostar', 'dio']`, () => {
  link.append('jay');
  link.append('jolin');
  link.append('jostar');
  link.append('dio');
  expect(link.display()).toEqual(['jay', 'jolin', 'jostar', 'dio']);
});

test(`linked list after insertion should be ['jay', 'toki', 'jolin', 'jostar', 'dio', 'sako']`, () => {
  link.insert('toki', 'jay'); // 首元素后插入
  link.insert('sako', 'dio'); // 尾元素后插入
  expect(link.display()).toEqual(['jay', 'toki', 'jolin', 'jostar', 'dio', 'sako']);
});

test(`linked list after remove should be ['jay', 'toki', 'jostar', 'dio', 'sako']`, () => {
  link.remove('jolin');
  expect(link.display()).toEqual(['jay', 'toki', 'jostar', 'dio', 'sako']);
});
