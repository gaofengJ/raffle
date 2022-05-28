import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useDidMount } from 'hooooks';
import { menus } from '@/data/config';
import { Button } from 'antd-mobile';
import './index.less';

let timer: any = null;

const Order = () => {
  const History = useHistory();

  const [menuArr, setMenuArr] = useState<string[]>([]);
  const [index, setIndex] = useState<number>(0);
  const [isOrdering, setIsOrdering] = useState<boolean>(false);

  const handleOrder = () => {
    if (isOrdering) {
      clearInterval(timer);
      setIsOrdering(false);
      return;
    }
    setIsOrdering(true);
    const len = menuArr.length;
    if (!len) return;
    timer = setInterval(() => {
      const num = Math.floor(Math.random() * len);
      setIndex(num);
    }, 50);
  };

  const handelGoSettings = () => {
    History.push('/settings');
  };

  useDidMount(() => {
    const menuStorage: string[] = JSON.parse(
      localStorage.getItem('raffles') || '[]',
    );
    setMenuArr(menuStorage.length ? menuStorage : menus);
  });

  return (
    <div className='order-page'>
      <div className='menu-content'>{menuArr[index]}</div>
      <div className='button-wrapper'>
        <Button color='primary' onClick={handleOrder}>
          {isOrdering ? '停止抽奖' : '开始抽奖'}
        </Button>
        <Button color='primary' onClick={handelGoSettings}>
          修改奖品
        </Button>
      </div>
    </div>
  );
};

export default Order;
