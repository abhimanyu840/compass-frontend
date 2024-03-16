import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SalesPage = () => {
    const [salesData, setSalesData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSalesData = async () => {
            try {
                const response = await axios.get('/api/sales');
                setSalesData(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching sales data:', error);
                setLoading(false);
            }
        };

        fetchSalesData();
    }, []);

    return (
        <div className="container mx-auto px-4 py-8 font-poppins">
            <h2 className="text-2xl font-bold mb-4">Sales Statistics</h2>
            {loading ? (
                <p className="text-gray-600">Loading sales data...</p>
            ) : (
                <div>
                    {salesData ? (
                        <div>
                            <p className="text-gray-800">Total Sales: {salesData.totalSales}</p>
                            <p className="text-gray-800">Average Sales: {salesData.averageSales}</p>
                            <p className="text-gray-800">Top Selling Product: {salesData.topSellingProduct}</p>
                            {/* Additional sales statistics */}
                        </div>
                        
                    ) : (
                        <p className="text-gray-600">No sales data available.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default SalesPage;
