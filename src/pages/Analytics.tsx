import { Link } from 'react-router-dom';
import ReactApexChart from 'react-apexcharts';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../store';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Dropdown from '../components/Dropdown';
import {useEffect, useState} from 'react';
import { setPageTitle } from '../store/themeConfigSlice';
import CodeHighlight from "../components/Highlight";

const Analytics = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Analytics Admin'));
    });

    const [loading] = useState(false);


    const [codeArr, setCodeArr] = useState<string[]>([]);


    const toggleCode = (name: string) => {
        if (codeArr.includes(name)) {
            setCodeArr((value) => value.filter((d) => d !== name));
        } else {
            setCodeArr([...codeArr, name]);
        }
    };
    const isDark = useSelector((state: IRootState) => state.themeConfig.theme) === 'dark' ? true : false;
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

    // totalVisitOptions
    const totalVisit: any = {
        series: [{ data: [21, 9, 36, 12, 44, 25, 59, 41, 66, 25] }],
        options: {
            chart: {
                height: 58,
                type: 'line',
                fontFamily: 'Nunito, sans-serif',
                sparkline: {
                    enabled: true,
                },
                dropShadow: {
                    enabled: true,
                    blur: 3,
                    color: '#009688',
                    opacity: 0.4,
                },
            },
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            colors: ['#009688'],
            grid: {
                padding: {
                    top: 5,
                    bottom: 5,
                    left: 5,
                    right: 5,
                },
            },
            tooltip: {
                x: {
                    show: false,
                },
                y: {
                    title: {
                        formatter: () => {
                            return '';
                        },
                    },
                },
            },
        },
    };
    // paidVisitOptions
    const paidVisit: any = {
        series: [{ data: [22, 19, 30, 47, 32, 44, 34, 55, 41, 69] }],
        options: {
            chart: {
                height: 58,
                type: 'line',
                fontFamily: 'Nunito, sans-serif',
                sparkline: {
                    enabled: true,
                },
                dropShadow: {
                    enabled: true,
                    blur: 3,
                    color: '#e2a03f',
                    opacity: 0.4,
                },
            },
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            colors: ['#e2a03f'],
            grid: {
                padding: {
                    top: 5,
                    bottom: 5,
                    left: 5,
                    right: 5,
                },
            },
            tooltip: {
                x: {
                    show: false,
                },
                y: {
                    title: {
                        formatter: () => {
                            return '';
                        },
                    },
                },
            },
        },
    };

    //Sales By Category
    const salesByCategory: any = {
        series: [985, 737, 270],
        options: {
            chart: {
                type: 'donut',
                height: 460,
                fontFamily: 'Nunito, sans-serif',
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                show: true,
                width: 25,
                colors: isDark ? '#0e1726' : '#fff',
            },
            colors: isDark ? ['#5c1ac3', '#e2a03f', '#e7515a', '#e2a03f'] : ['#e2a03f', '#5c1ac3', '#e7515a'],
            legend: {
                position: 'bottom',
                horizontalAlign: 'center',
                fontSize: '14px',
                markers: {
                    width: 10,
                    height: 10,
                    offsetX: -2,
                },
                height: 50,
                offsetY: 20,
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: '65%',
                        background: 'transparent',
                        labels: {
                            show: true,
                            name: {
                                show: true,
                                fontSize: '29px',
                                offsetY: -10,
                            },
                            value: {
                                show: true,
                                fontSize: '26px',
                                color: isDark ? '#bfc9d4' : undefined,
                                offsetY: 16,
                                formatter: (val: any) => {
                                    return val;
                                },
                            },
                            total: {
                                show: true,
                                label: 'Total',
                                color: '#888ea8',
                                fontSize: '29px',
                                formatter: (w: any) => {
                                    return w.globals.seriesTotals.reduce(function (a: any, b: any) {
                                        return a + b;
                                    }, 0);
                                },
                            },
                        },
                    },
                },
            },
            labels: ['oauth2', 'jwt', 'openID'],
            states: {
                hover: {
                    filter: {
                        type: 'none',
                        value: 0.15,
                    },
                },
                active: {
                    filter: {
                        type: 'none',
                        value: 0.15,
                    },
                },
            },
        },
    };


    // areaChartOptions
    const areaChart: any = {
        series: [
            {
                name: 'Requests',
                data: [16800, 16800, 15500, 17800, 15500, 17000, 19000, 16000, 15000, 17000, 14000, 17000],
            },
        ],
        options: {
            chart: {
                type: 'area',
                height: 300,
                zoom: {
                    enabled: false,
                },
                toolbar: {
                    show: false,
                },
            },
            colors: ['#805dca'],
            dataLabels: {
                enabled: false,
            },
            stroke: {
                width: 2,
                curve: 'smooth',
            },
            xaxis: {
                axisBorder: {
                    color: isDark ? '#191e3a' : '#e0e6ed',
                },
            },
            yaxis: {
                opposite: isRtl ? true : false,
                labels: {
                    offsetX: isRtl ? -40 : 0,
                },
            },
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            legend: {
                horizontalAlign: 'left',
            },
            grid: {
                borderColor: isDark ? '#191E3A' : '#E0E6ED',
                xaxis: {
                    lines: {
                        show: false,
                    },
                },
            },
            tooltip: {
                theme: isDark ? 'dark' : 'light',
            },
        },
    };

    // uniqueVisitorSeriesOptions
    const uniqueVisitorSeries: any = {
        series: [
            {
                name: 'Users',
                data: [1520, 1360, 2790, 1430, 4213, 4523, 3846, 6398],
            },
            {
                name: 'Verified',
                data: [1230, 1200, 1700, 461, 4000, 4303, 3132, 6250],
            },
        ],
        options: {
            chart: {
                height: 360,
                type: 'bar',
                fontFamily: 'Nunito, sans-serif',
                toolbar: {
                    show: false,
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                width: 2,
                colors: ['transparent'],
            },
            colors: ['#5c1ac3', '#ffbb44'],
            dropShadow: {
                enabled: true,
                blur: 3,
                color: '#515365',
                opacity: 0.4,
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    borderRadius: 8,
                    borderRadiusApplication: 'end',
                },
            },
            legend: {
                position: 'bottom',
                horizontalAlign: 'center',
                fontSize: '14px',
                itemMargin: {
                    horizontal: 8,
                    vertical: 8,
                },
            },
            grid: {
                borderColor: isDark ? '#191e3a' : '#e0e6ed',
                padding: {
                    left: 20,
                    right: 20,
                },
                xaxis: {
                    lines: {
                        show: false,
                    },
                },
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                axisBorder: {
                    show: true,
                    color: isDark ? '#3b3f5c' : '#e0e6ed',
                },
            },
            yaxis: {
                tickAmount: 6,
                opposite: isRtl ? true : false,
                labels: {
                    offsetX: isRtl ? -10 : 0,
                },
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: isDark ? 'dark' : 'light',
                    type: 'vertical',
                    shadeIntensity: 0.3,
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 0.8,
                    stops: [0, 100],
                },
            },
            tooltip: {
                marker: {
                    show: true,
                },
            },
        },
    };
    // followersOptions
    const followers: any = {
        series: [
            {
                data: [38, 60, 38, 52, 36, 40, 28],
            },
        ],
        options: {
            chart: {
                height: 160,
                type: 'area',
                fontFamily: 'Nunito, sans-serif',
                sparkline: {
                    enabled: true,
                },
            },
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            colors: ['#4361ee'],
            grid: {
                padding: {
                    top: 5,
                },
            },
            yaxis: {
                show: false,
            },
            tooltip: {
                x: {
                    show: false,
                },
                y: {
                    title: {
                        formatter: () => {
                            return '';
                        },
                    },
                },
            },
        },
    };
    // referralOptions
    const referral: any = {
        series: [
            {
                data: [60, 28, 52, 38, 40, 36, 38],
            },
        ],
        options: {
            chart: {
                height: 160,
                type: 'area',
                fontFamily: 'Nunito, sans-serif',
                sparkline: {
                    enabled: true,
                },
            },
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            colors: ['#e7515a'],
            grid: {
                padding: {
                    top: 5,
                },
            },
            yaxis: {
                show: false,
            },
            tooltip: {
                x: {
                    show: false,
                },
                y: {
                    title: {
                        formatter: () => {
                            return '';
                        },
                    },
                },
            },
        },
    };
    // engagementOptions
    const engagement: any = {
        series: [
            {
                name: 'Sales',
                data: [28, 50, 36, 60, 38, 52, 38],
            },
        ],
        options: {
            chart: {
                height: 160,
                type: 'area',
                fontFamily: 'Nunito, sans-serif',
                sparkline: {
                    enabled: true,
                },
            },
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            colors: ['#1abc9c'],
            grid: {
                padding: {
                    top: 5,
                },
            },
            yaxis: {
                show: false,
            },
            tooltip: {
                x: {
                    show: false,
                },
                y: {
                    title: {
                        formatter: () => {
                            return '';
                        },
                    },
                },
            },
        },
    };
    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link to="/" className="text-primary hover:underline">
                        Dashboard
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Analytics</span>
                </li>
            </ul>
            <div className="pt-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-6 text-white">
                    <div className="panel bg-gradient-to-r from-cyan-500 to-cyan-400">
                        <div className="flex justify-between">
                            <div className="ltr:mr-1 rtl:ml-1 text-md font-semibold">Registered Users</div>
                            <div className="dropdown">
                                <Dropdown
                                    offset={[0, 5]}
                                    placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                    btnClassName="hover:opacity-80"
                                    button={
                                        <svg className="w-5 h-5 opacity-70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="5" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
                                            <circle opacity="0.5" cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
                                            <circle cx="19" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
                                        </svg>
                                    }
                                >
                                    <ul className="text-black dark:text-white-dark">
                                        <li>
                                            <button type="button">View Report</button>
                                        </li>
                                        <li>
                                            <button type="button">Edit Report</button>
                                        </li>
                                    </ul>
                                </Dropdown>
                            </div>
                        </div>
                        <div className="flex items-center mt-5">
                            <div className="text-3xl font-bold ltr:mr-3 rtl:ml-3"> 13154 </div>
                            <div className="badge bg-white/30">+ 2.35% </div>
                        </div>
                        <div className="flex items-center font-semibold mt-5">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ltr:mr-2 rtl:ml-2">
                                <path
                                    opacity="0.5"
                                    d="M3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C4.97196 6.49956 7.81811 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                />
                                <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" strokeWidth="1.5" />
                            </svg>
                            {/*Last Week 44,700*/}
                        </div>
                    </div>

                    {/* Sessions */}
                    <div className="panel bg-gradient-to-r from-violet-500 to-violet-400">
                        <div className="flex justify-between">
                            <div className="ltr:mr-1 rtl:ml-1 text-md font-semibold">Daily New Users </div>
                            <div className="dropdown">
                                <Dropdown
                                    offset={[0, 5]}
                                    placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                    btnClassName="hover:opacity-80"
                                    button={
                                        <svg className="w-5 h-5 opacity-70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="5" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
                                            <circle opacity="0.5" cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
                                            <circle cx="19" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
                                        </svg>
                                    }
                                >
                                    <ul className="text-black dark:text-white-dark">
                                        <li>
                                            <button type="button">View Report</button>
                                        </li>
                                        <li>
                                            <button type="button">Edit Report</button>
                                        </li>
                                    </ul>
                                </Dropdown>
                            </div>
                        </div>
                        <div className="flex items-center mt-5">
                            <div className="text-3xl font-bold ltr:mr-3 rtl:ml-3"> 2540 </div>
                            {/*<div className="badge bg-white/30">- 2.35% </div>*/}
                        </div>
                        <div className="flex items-center font-semibold mt-5">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ltr:mr-2 rtl:ml-2">
                                <path
                                    opacity="0.5"
                                    d="M3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C4.97196 6.49956 7.81811 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                />
                                <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" strokeWidth="1.5" />
                            </svg>
                            {/*Last Week 84,709*/}
                        </div>
                    </div>

                    {/*  Time On-Site */}
                    <div className="panel bg-gradient-to-r from-blue-500 to-blue-400">
                        <div className="flex justify-between">
                            <div className="ltr:mr-1 rtl:ml-1 text-md font-semibold">Total Transactions</div>
                            <div className="dropdown">
                                <Dropdown
                                    offset={[0, 5]}
                                    placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                    btnClassName="hover:opacity-80"
                                    button={
                                        <svg className="w-5 h-5 opacity-70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="5" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
                                            <circle opacity="0.5" cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
                                            <circle cx="19" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
                                        </svg>
                                    }
                                >
                                    <ul className="text-black dark:text-white-dark">
                                        <li>
                                            <button type="button">View Report</button>
                                        </li>
                                        <li>
                                            <button type="button">Edit Report</button>
                                        </li>
                                    </ul>
                                </Dropdown>
                            </div>
                        </div>
                        <div className="flex items-center mt-5">
                            <div className="text-3xl font-bold ltr:mr-3 rtl:ml-3"> 248,085 </div>
                            <div className="badge bg-white/30">+ 10.35% </div>
                        </div>
                        <div className="flex items-center font-semibold mt-5">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ltr:mr-2 rtl:ml-2">
                                <path
                                    opacity="0.5"
                                    d="M3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C4.97196 6.49956 7.81811 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                />
                                <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" strokeWidth="1.5" />
                            </svg>
                            {/*Last Week 37,894*/}
                        </div>
                    </div>

                    {/* Bounce Rate */}
                    <div className="panel bg-gradient-to-r from-fuchsia-500 to-fuchsia-400">
                        <div className="flex justify-between">
                            <div className="ltr:mr-1 rtl:ml-1 text-md font-semibold">Total Service Providers
                            </div>
                            <div className="dropdown">
                                <Dropdown
                                    offset={[0, 5]}
                                    placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                    btnClassName="hover:opacity-80"
                                    button={
                                        <svg className="w-5 h-5 opacity-70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="5" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
                                            <circle opacity="0.5" cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
                                            <circle cx="19" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
                                        </svg>
                                    }
                                >
                                    <ul className="text-black dark:text-white-dark">
                                        <li>
                                            <button type="button">View Report</button>
                                        </li>
                                        <li>
                                            <button type="button">Edit Report</button>
                                        </li>
                                    </ul>
                                </Dropdown>
                            </div>
                        </div>
                        <div className="flex items-center mt-5">
                            <div className="text-3xl font-bold ltr:mr-3 rtl:ml-3"> 3520 </div>
                            {/*<div className="badge bg-white/30">- 0.35% </div>*/}
                        </div>
                        <div className="flex items-center font-semibold mt-5">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ltr:mr-2 rtl:ml-2">
                                <path
                                    opacity="0.5"
                                    d="M3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C4.97196 6.49956 7.81811 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                />
                                <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" strokeWidth="1.5" />
                            </svg>
                            {/*Last Week 50.01%*/}
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-6 mb-6">
                    <div className="panel h-full p-0 lg:col-span-2">
                        <div className="flex items-start justify-between dark:text-white-light mb-5 p-5 border-b  border-white-light dark:border-[#1b2e4b]">
                            <h5 className="font-semibold text-lg ">Unique Visitors</h5>
                            <div className="dropdown">
                                <Dropdown
                                    offset={[0, 5]}
                                    placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                    btnClassName="hover:text-primary"
                                    button={
                                        <svg className="w-5 h-5 text-black/70 dark:text-white/70 hover:!text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="5" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
                                            <circle opacity="0.5" cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
                                            <circle cx="19" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
                                        </svg>
                                    }
                                >
                                    <ul>
                                        <li>
                                            <button type="button">View</button>
                                        </li>
                                        <li>
                                            <button type="button">Update</button>
                                        </li>
                                        <li>
                                            <button type="button">Delete</button>
                                        </li>
                                    </ul>
                                </Dropdown>
                            </div>
                        </div>

                        <ReactApexChart options={uniqueVisitorSeries.options} series={uniqueVisitorSeries.series} type="bar" height={360} />
                    </div>

                    <div className="panel h-full">
                        <div className="flex items-start justify-between dark:text-white-light mb-5 -mx-5 p-5 pt-0 border-b  border-white-light dark:border-[#1b2e4b]">
                            <h5 className="font-semibold text-lg ">Activity Log</h5>
                            <div className="dropdown">
                                <Dropdown
                                    offset={[0, 5]}
                                    placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                    btnClassName="hover:text-primary"
                                    button={
                                        <svg className="w-5 h-5 text-black/70 dark:text-white/70 hover:!text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="5" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
                                            <circle opacity="0.5" cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
                                            <circle cx="19" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
                                        </svg>
                                    }
                                >
                                    <ul>
                                        <li>
                                            <button type="button">View All</button>
                                        </li>
                                        <li>
                                            <button type="button">Mark as Read</button>
                                        </li>
                                    </ul>
                                </Dropdown>
                            </div>
                        </div>
                        <PerfectScrollbar className="perfect-scrollbar relative h-[360px] pr-3 -mr-3">
                            <div className="space-y-7">
                                <div className="flex">
                                    <div className="ltr:mr-2 rtl:ml-2 relative z-10 before:w-[2px] before:h-[calc(100%-24px)] before:bg-white-dark/30 before:absolute before:top-10 before:left-4">
                                        <div className="bg-secondary shadow shadow-secondary w-8 h-8 rounded-full flex items-center justify-center text-white">
                                            <svg className="w-4 h-4" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className="font-semibold dark:text-white-light">
                                            A new user has subscribed
                                        </h5>
                                        <p className="text-white-dark text-xs">27 Feb, 2020</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="ltr:mr-2 rtl:ml-2 relative z-10 before:w-[2px] before:h-[calc(100%-24px)] before:bg-white-dark/30 before:absolute before:top-10 before:left-4">
                                        <div className="bg-success shadow-success w-8 h-8 rounded-full flex items-center justify-center text-white">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    opacity="0.5"
                                                    d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                />
                                                <path
                                                    d="M6 8L8.1589 9.79908C9.99553 11.3296 10.9139 12.0949 12 12.0949C13.0861 12.0949 14.0045 11.3296 15.8411 9.79908L18 8"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className="font-semibold dark:text-white-light">
                                           User <b>PDR</b> has upgraded their plan
                                        </h5>
                                        <p className="text-white-dark text-xs">28 Feb, 2020</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="ltr:mr-2 rtl:ml-2 relative z-10 before:w-[2px] before:h-[calc(100%-24px)] before:bg-white-dark/30 before:absolute before:top-10 before:left-4">
                                        <div className="bg-primary w-8 h-8 rounded-full flex items-center justify-center text-white">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path opacity="0.5" d="M4 12.9L7.14286 16.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M20.0002 7.5625L11.4286 16.5625L11.0002 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className="font-semibold dark:text-white-light">User <b>RFD</b> has reached 1000 clients</h5>
                                        <p className="text-white-dark text-xs">27 Feb, 2020</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="ltr:mr-2 rtl:ml-2 relative z-10 before:w-[2px] before:h-[calc(100%-24px)] before:bg-white-dark/30 before:absolute before:top-10 before:left-4">
                                        <div className="bg-danger w-8 h-8 rounded-full flex items-center justify-center text-white">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path opacity="0.5" d="M4 12.9L7.14286 16.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M20.0002 7.5625L11.4286 16.5625L11.0002 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className="font-semibold dark:text-white-light">
                                            A user has sumitted a ticket
                                        </h5>
                                        <p className="text-white-dark text-xs">01 Mar, 2020</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="ltr:mr-2 rtl:ml-2 relative z-10 before:w-[2px] before:h-[calc(100%-24px)] before:bg-white-dark/30 before:absolute before:top-10 before:left-4">
                                        <div className="bg-warning w-8 h-8 rounded-full flex items-center justify-center text-white">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M15.3929 4.05365L14.8912 4.61112L15.3929 4.05365ZM19.3517 7.61654L18.85 8.17402L19.3517 7.61654ZM21.654 10.1541L20.9689 10.4592V10.4592L21.654 10.1541ZM3.17157 20.8284L3.7019 20.2981H3.7019L3.17157 20.8284ZM20.8284 20.8284L20.2981 20.2981L20.2981 20.2981L20.8284 20.8284ZM14 21.25H10V22.75H14V21.25ZM2.75 14V10H1.25V14H2.75ZM21.25 13.5629V14H22.75V13.5629H21.25ZM14.8912 4.61112L18.85 8.17402L19.8534 7.05907L15.8947 3.49618L14.8912 4.61112ZM22.75 13.5629C22.75 11.8745 22.7651 10.8055 22.3391 9.84897L20.9689 10.4592C21.2349 11.0565 21.25 11.742 21.25 13.5629H22.75ZM18.85 8.17402C20.2034 9.3921 20.7029 9.86199 20.9689 10.4592L22.3391 9.84897C21.9131 8.89241 21.1084 8.18853 19.8534 7.05907L18.85 8.17402ZM10.0298 2.75C11.6116 2.75 12.2085 2.76158 12.7405 2.96573L13.2779 1.5653C12.4261 1.23842 11.498 1.25 10.0298 1.25V2.75ZM15.8947 3.49618C14.8087 2.51878 14.1297 1.89214 13.2779 1.5653L12.7405 2.96573C13.2727 3.16993 13.7215 3.55836 14.8912 4.61112L15.8947 3.49618ZM10 21.25C8.09318 21.25 6.73851 21.2484 5.71085 21.1102C4.70476 20.975 4.12511 20.7213 3.7019 20.2981L2.64124 21.3588C3.38961 22.1071 4.33855 22.4392 5.51098 22.5969C6.66182 22.7516 8.13558 22.75 10 22.75V21.25ZM1.25 14C1.25 15.8644 1.24841 17.3382 1.40313 18.489C1.56076 19.6614 1.89288 20.6104 2.64124 21.3588L3.7019 20.2981C3.27869 19.8749 3.02502 19.2952 2.88976 18.2892C2.75159 17.2615 2.75 15.9068 2.75 14H1.25ZM14 22.75C15.8644 22.75 17.3382 22.7516 18.489 22.5969C19.6614 22.4392 20.6104 22.1071 21.3588 21.3588L20.2981 20.2981C19.8749 20.7213 19.2952 20.975 18.2892 21.1102C17.2615 21.2484 15.9068 21.25 14 21.25V22.75ZM21.25 14C21.25 15.9068 21.2484 17.2615 21.1102 18.2892C20.975 19.2952 20.7213 19.8749 20.2981 20.2981L21.3588 21.3588C22.1071 20.6104 22.4392 19.6614 22.5969 18.489C22.7516 17.3382 22.75 15.8644 22.75 14H21.25ZM2.75 10C2.75 8.09318 2.75159 6.73851 2.88976 5.71085C3.02502 4.70476 3.27869 4.12511 3.7019 3.7019L2.64124 2.64124C1.89288 3.38961 1.56076 4.33855 1.40313 5.51098C1.24841 6.66182 1.25 8.13558 1.25 10H2.75ZM10.0298 1.25C8.15538 1.25 6.67442 1.24842 5.51887 1.40307C4.34232 1.56054 3.39019 1.8923 2.64124 2.64124L3.7019 3.7019C4.12453 3.27928 4.70596 3.02525 5.71785 2.88982C6.75075 2.75158 8.11311 2.75 10.0298 2.75V1.25Z"
                                                    fill="currentColor"
                                                />
                                                <path opacity="0.5" d="M13 2.5V5C13 7.35702 13 8.53553 13.7322 9.26777C14.4645 10 15.643 10 18 10H22" stroke="currentColor" strokeWidth="1.5" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className="font-semibold dark:text-white-light">
                                            User <b>DRD</b> has upgraded their plan
                                        </h5>
                                        <p className="text-white-dark text-xs">10 Mar, 2020</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="ltr:mr-2 rtl:ml-2">
                                        <div className="bg-dark w-8 h-8 rounded-full flex items-center justify-center text-white">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    opacity="0.5"
                                                    d="M2 17C2 15.1144 2 14.1716 2.58579 13.5858C3.17157 13 4.11438 13 6 13H18C19.8856 13 20.8284 13 21.4142 13.5858C22 14.1716 22 15.1144 22 17C22 18.8856 22 19.8284 21.4142 20.4142C20.8284 21 19.8856 21 18 21H6C4.11438 21 3.17157 21 2.58579 20.4142C2 19.8284 2 18.8856 2 17Z"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                />
                                                <path
                                                    opacity="0.5"
                                                    d="M2 6C2 4.11438 2 3.17157 2.58579 2.58579C3.17157 2 4.11438 2 6 2H18C19.8856 2 20.8284 2 21.4142 2.58579C22 3.17157 22 4.11438 22 6C22 7.88562 22 8.82843 21.4142 9.41421C20.8284 10 19.8856 10 18 10H6C4.11438 10 3.17157 10 2.58579 9.41421C2 8.82843 2 7.88562 2 6Z"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                />
                                                <path d="M11 6H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                <path d="M6 6H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                <path d="M11 17H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                <path d="M6 17H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className="font-semibold dark:text-white-light">New build deployed</h5>
                                        <p className="text-white-dark text-xs">06 Apr, 2020</p>
                                    </div>
                                </div>
                            </div>
                        </PerfectScrollbar>
                    </div>
                </div>

                <div className="grid sm:grid-cols-3 xl:grid-cols-2 gap-6 mb-6">

                    <div className="panel">
                        <div className="mb-5 flex items-center justify-between">
                            <h5 className="text-lg font-semibold dark:text-white">Daily requests</h5>
                            <button type="button" className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600" onClick={() => toggleCode('code2')}>
                            {/*<span className="flex items-center">*/}
                            {/*    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ltr:mr-2 rtl:ml-2">*/}
                            {/*        <path*/}
                            {/*            d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296"*/}
                            {/*            stroke="currentColor"*/}
                            {/*            strokeWidth="1.5"*/}
                            {/*            strokeLinecap="round"*/}
                            {/*        />*/}
                            {/*        <path opacity="0.5" d="M13.9868 5L10.0132 19.8297" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />*/}
                            {/*        <path*/}
                            {/*            d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296"*/}
                            {/*            stroke="currentColor"*/}
                            {/*            strokeWidth="1.5"*/}
                            {/*            strokeLinecap="round"*/}
                            {/*        />*/}
                            {/*    </svg>{' '}*/}
                            {/*    Code*/}
                            {/*</span>*/}
                            </button>
                        </div>
                        <div className="mb-5">
                            <ReactApexChart series={areaChart.series} options={areaChart.options} className="rounded-lg bg-white dark:bg-black" type="area" height={300} />
                        </div>
                        {codeArr.includes('code2') && (
                            <CodeHighlight>
                            <pre className="language-typescript">{`import ReactApexChart from 'react-apexcharts';

<ReactApexChart series={areaChart.series} options={areaChart.options} className="rounded-lg bg-white dark:bg-black" type="area" height={300} />

// areaChartOptions
const areaChart: any = {
    series: [
        {
            name: 'Income',
            data: [16800, 16800, 15500, 17800, 15500, 17000, 19000, 16000, 15000, 17000, 14000, 17000],
        },
    ],
    options: {
        chart: {
            type: 'area',
            height: 300,
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        colors: ['#805dca'],
        dataLabels: {
            enabled: false,
        },
        stroke: {
            width: 2,
            curve: 'smooth',
        },
        xaxis: {
            axisBorder: {
                color: isDark ? '#191e3a' : '#e0e6ed',
            },
        },
        yaxis: {
            opposite: isRtl ? true : false,
            labels: {
                offsetX: isRtl ? -40 : 0,
            },
        },
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        legend: {
            horizontalAlign: 'left',
        },
        grid: {
            borderColor: isDark ? '#191E3A' : '#E0E6ED',
        },
        tooltip: {
            theme: isDark ? 'dark' : 'light',
        },
    },
};`}</pre>
                            </CodeHighlight>
                        )}
                    </div>

                    <div className="panel h-full">
                        <div className="flex items-center mb-5">
                            <h5 className="font-semibold text-lg dark:text-white-light">Auth types</h5>
                        </div>
                        <div>
                            <div className="bg-white dark:bg-black rounded-lg">
                                {/* <!-- loader --> */}

                                {loading ? (
                                    <div className="min-h-[325px] grid place-content-center bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] ">
                                        <span className="animate-spin border-2 border-black dark:border-white !border-l-transparent  rounded-full w-5 h-5 inline-flex"></span>
                                    </div>
                                ) : (
                                    <ReactApexChart series={salesByCategory.series} options={salesByCategory.options} type="donut" height={460} />
                                )}
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Analytics;
