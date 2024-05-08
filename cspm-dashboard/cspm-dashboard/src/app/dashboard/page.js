"use client"
import Link from 'next/link'
import { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component';
import ec2 from '../../api/ec2.json'
// const fetcher = (url) => fetch(url).then((res) => res.json())


// export const metadata = {
//     title: 'Vamsi',
//   }

export default function Dashboard() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)

  const columns = [
    {
      name: 'InstanceId',
      selector: row => row.InstanceId,
    },
    {
      name: 'InstanceType',
      selector: row => row.InstanceType,
    },
    {
      name: 'PrivateIpAddress',
      selector: row => row.PrivateIpAddress,
    },
    {
      name: 'PublicIpAddress',
      selector: row => row.PublicIpAddress,
    },
    {
      name: 'State',
      selector: row => row.State.Name
    }
  ];


  useEffect(() => {
    // data = useSWR('/cspm/data-sources/ec2.json', fetcher)
    console.log(ec2["Reservations"][0]["Instances"])
    setData(ec2["Reservations"][0]["Instances"])
    setLoading(false)
    
    
  }, [])
  console.log(data)
  if (isLoading) return <p>Loading...</p>
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <DataTable
			columns={columns}
			data={data}
      pagination={true}
      
		/>
      </main>
    );
  }
  