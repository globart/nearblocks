import React from 'react';
import List from '../common/List';
import Skeleton from '../common/Skeleton';

const Index = () => {
  return (
    <div className="container mx-auto px-3 -mt-48">
      <div>
        <div className="relative flex gap-4  mt-10">
          <div className="w-full">
            <div className="h-full bg-white soft-shadow rounded-lg overflow-hidden">
              <div>
                <h2 className=" flex justify-between border-b p-3 text-gray-600 text-sm font-semibold">
                  <span>Staking overview</span>
                  <div className="flex">
                    <span>Total Supply: </span>{' '}
                    <Skeleton className="h-4 w-12 break-words" />
                  </div>
                </h2>
              </div>
              <div className="px-3 divide-y text-sm text-gray-600">
                <div className="flex  py-4">
                  <div className="w-full md:w-1/4 mb-2 md:mb-0 ">
                    Current Validators
                  </div>
                  <div className="w-full md:w-3/4 break-words">
                    <Skeleton className="h-4 w-16 break-words" />
                  </div>
                </div>
                <div className="flex  py-4">
                  <div className="w-full md:w-1/4 mb-2 md:mb-0 ">
                    Total Staked
                  </div>
                  <div className="w-full md:w-3/4 break-words">
                    <Skeleton className="h-4 w-16 break-words" />
                  </div>
                </div>
                <div className="flex  py-4">
                  <div className="w-full md:w-1/4 mb-2 md:mb-0 ">
                    Current seat price
                  </div>
                  <div className="w-full md:w-3/4 break-words">
                    <Skeleton className="h-4 w-16 break-words" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="h-full bg-white soft-shadow rounded-lg overflow-hidden">
              <h2 className="border-b p-3 text-gray-600 text-sm font-semibold">
                Epoch information
              </h2>
              <div className="px-3 divide-y text-sm text-gray-600">
                <div className="flex items-center justify-between py-4">
                  <div className="w-full md:w-1/4 mb-2 md:mb-0 ">
                    Epoch elapsed time:
                  </div>
                  <div className="w-full text-green-500 md:w-3/4 break-words">
                    <Skeleton className="h-3 w-32" />
                  </div>
                </div>
                <div className="flex items-center justify-between py-4">
                  <div className="w-full md:w-1/4 mb-2 md:mb-0 ">ETA:</div>
                  <div className="w-full md:w-3/4 text-green-500 break-words">
                    <Skeleton className="h-3 w-32" />
                  </div>
                </div>
                <div className="flex items-center justify-between py-4">
                  <div className="w-full md:w-1/4 mb-2 md:mb-0 ">Progress</div>
                  <div className="w-full md:w-3/4 break-words">
                    <Skeleton className="h-3 w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5"></div>
        <div className="relative w-full mb-10">
          <List />
        </div>
      </div>
    </div>
  );
};

export default Index;