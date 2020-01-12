import moment from 'moment';

export default [{
  id: '0',
  description: 'Gum',
  note: '',
  amount: 195,
  createdAt: 0
}, {
  id: '1',
  description: 'Shoes',
  note: '',
  amount: 222,
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '2',
  description: 'Floss',
  note: '',
  amount: 98,
  createdAt: moment(0).add(4, 'days').valueOf()
}];
