import { Table } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Tables = () => {

  const tableColumns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Color',
      key: 'color',
      render: (_, value) => value.data?.color || 'Black',
    },
    {
      title: 'Capacity',
      key: 'capacity',
      render: (_, value) => value.data?.Capacity || '128 GB',
    },
  ];

  const url = 'https://api.restful-api.dev/objects';
  const [tableData, setTableData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(url);
      setTableData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return <Table dataSource={tableData} columns={tableColumns} rowKey="id" />;
};

export default Tables;
