import {
    AiOutlineLineChart,
    AiOutlineProject,
    BsCode,
    GrCirclePlay,
    IoGitPullRequestOutline,
    IoSettingsOutline,
    MdSecurity,
    VscIssues,
} from "react-icons/all";

export const navLinkItemRepository = [
    {
        name: "Code",
        path: "Code",
        icon: <BsCode size={18} />,
    },
    {
        name: "Issues",
        path: "Issues",
        icon: <VscIssues size={18} />,
    },
    {
        name: "Pull requests",
        path: "Pull requests",
        icon: <IoGitPullRequestOutline size={18} />,
    },
    {
        name: "Actions",
        path: "Actions",
        icon: <GrCirclePlay size={18} />,
    },
    {
        name: "Projects",
        path: "Projects",
        icon: <AiOutlineProject size={18} />,
    },
    {
        name: "Security",
        path: "Security",
        icon: <MdSecurity size={18} />,
    },
    {
        name: "Insights",
        path: "Insights",
        icon: <AiOutlineLineChart size={18} />,
    },
    {
        name: "Settings",
        path: "Settings",
        icon: <IoSettingsOutline size={18} />,
    },
];
