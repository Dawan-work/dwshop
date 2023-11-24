import React from 'react'
import { Skeleton } from './Skeleton'

export default function SkeletonCards({size}) {
  return (
    <div className="my-10 flex gap-10 flex-col justify-center md:grid md:grid-cols-2 lg:grid-cols-4">
    {
        [...Array(size)].map((_, index) => (
            <Skeleton key={index} />
        ))
    }
  </div>
  )
}
