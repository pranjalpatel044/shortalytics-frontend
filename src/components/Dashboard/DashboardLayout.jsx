import React, { useState } from 'react'
import Graph from './Graph'
import { dummyData } from '../../dummyData/data'
import { useStoreContext } from '../../contextApi/ContextApi'
import { useFetchMyShortUrls, useFetchTotalClicks } from '../../hooks/useQuery'
import ShortenPopUp from './ShortenPopUp'
import { FaLink } from 'react-icons/fa'
import ShortenUrlList from './ShortenUrlList'
import { useNavigate } from 'react-router-dom'
import Loader from '../Loader'

const DashboardLayout = () => {
    const { token } = useStoreContext();
    const navigate = useNavigate();
    const [shortenPopUp, setShortenPopUp] = useState(false);

    function onError() {
      navigate("/error");
    }

    const { isLoading, data: myShortenUrls, refetch } = useFetchMyShortUrls(token, onError);
    const { isLoading: loader, data: totalClicks } = useFetchTotalClicks(token, onError);

    return (
        <div className="lg:px-14 sm:px-8 px-4 min-h-[calc(100vh-64px)]">
            {loader ? (
                <Loader />
            ) : (
                <div className="lg:w-[90%] w-full mx-auto py-16">
                    {/* Graph Section */}
                    <div className="h-96 relative">
                        {totalClicks.length === 0 && (
                            <div className="absolute flex flex-col justify-center sm:items-center items-end w-full left-0 top-0 bottom-0 right-0 m-auto">
                                <h1 className="text-slate-800 font-serif sm:text-2xl text-[18px] font-bold mb-1">
                                    No Analytics Available Yet
                                </h1>
                                <h3 className="sm:w-96 w-[90%] sm:ml-0 pl-6 text-center sm:text-lg text-sm text-slate-600">
                                    Share your shortened links to start tracking engagement and view analytics here.
                                </h3>
                            </div>
                        )}
                        <Graph graphData={totalClicks} />
                    </div>

                    {/* Create Short URL Button */}
                    <div className="py-5 sm:text-end text-center">
                        <button
                            className="bg-custom-gradient px-4 py-2 rounded-md text-white"
                            onClick={() => setShortenPopUp(true)}
                        >
                            Create New Short Link
                        </button>
                    </div>

                    {/* URL List Section */}
                    <div>
                        {!isLoading && myShortenUrls.length === 0 ? (
                            <div className="flex justify-center pt-16">
                                <div className="flex gap-2 items-center justify-center py-6 sm:px-8 px-5 rounded-md shadow-lg bg-gray-50">
                                    <h1 className="text-slate-800 font-montserrat sm:text-[18px] text-[14px] font-semibold mb-1">
                                        You haven't created any short links yet.
                                    </h1>
                                    <FaLink className="text-blue-500 sm:text-xl text-sm" />
                                </div>
                            </div>
                        ) : (
                            <ShortenUrlList data={myShortenUrls} />
                        )}
                    </div>
                </div>
            )}

            {/* Shorten URL Popup */}
            <ShortenPopUp
                refetch={refetch}
                open={shortenPopUp}
                setOpen={setShortenPopUp}
            />
        </div>
    );
};

export default DashboardLayout;
