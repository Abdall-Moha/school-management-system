import Layout from '../Components/Layout.jsx'
import { useSelector } from 'react-redux'
import {
  HiOutlineAcademicCap,
  HiOutlineBanknotes,
  HiOutlineCalendarDays,
  HiOutlineClipboardDocumentList,
  HiOutlineUserGroup,
  HiOutlineUsers,
} from "react-icons/hi2";

const StatCard = ({ title, description, value, icon: Icon, color }) => {
  return (
    <div className="bg-white rounded-xl shadow p-5 border border-gray-100">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="text-xs text-gray-400 mt-1">{description}</p>
          <h3 className="text-3xl font-bold text-gray-800 mt-2">{value}</h3>
        </div>

        <div className={`${color} w-12 h-12 rounded-lg flex items-center justify-center`}>
          <Icon className="text-2xl text-white" />
        </div>
      </div>
    </div>
  );
};

function Dashboard() {
  const students = useSelector((state) => state.students.students);
  const teachers = useSelector((state) => state.teachers.teachers);
  const users = useSelector((state) => state.users.users);
  const exams = useSelector((state) => state.exams.exams);
  const attendences = useSelector((state) => state.attendences.attendences);
  const finances = useSelector((state) => state.finances.finances);

  const today = new Date().toLocaleDateString("en-GB");
  const studentIds = students.map((student) => student.id);
  const activeFinances = finances.filter((item) =>
    studentIds.includes(item.studentId),
  );
  const todayAttendence = attendences.filter((item) => item.date === today);
  const presentToday = todayAttendence.filter(
    (item) => item.status === "Present",
  ).length;
  const absentToday = todayAttendence.filter(
    (item) => item.status === "Absent",
  ).length;
  const paidStudents = activeFinances.filter(
    (item) => item.status === "Paid",
  ).length;
  const unpaidStudents = activeFinances.filter(
    (item) => item.status === "Unpaid",
  ).length;
  const pendingPayments = students.length - activeFinances.length;

  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Dashboard</h2>
          <p className="text-gray-500 mt-1">
            Quick overview of students, teachers, users, exams, attendance, and finance records.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          <StatCard
            title="Total Students"
            description="All registered students"
            value={students.length}
            icon={HiOutlineAcademicCap}
            color="bg-blue-600"
          />

          <StatCard
            title="Total Teachers"
            description="All registered teachers"
            value={teachers.length}
            icon={HiOutlineUserGroup}
            color="bg-emerald-600"
          />

          <StatCard
            title="Total Users"
            description="System user accounts"
            value={users.length}
            icon={HiOutlineUsers}
            color="bg-indigo-600"
          />

          <StatCard
            title="Total Exams"
            description="Created exam records"
            value={exams.length}
            icon={HiOutlineClipboardDocumentList}
            color="bg-amber-500"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
          <div className="bg-white rounded-xl shadow p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-sky-600 w-10 h-10 rounded-lg flex items-center justify-center">
                <HiOutlineCalendarDays className="text-xl text-white" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  Today Attendance Summary
                </h3>
                <p className="text-sm text-gray-500">
                  Students marked for {today}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-gray-500">Total Marked</p>
                <p className="text-2xl font-bold text-gray-800">
                  {todayAttendence.length}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Total Present</p>
                <p className="text-2xl font-bold text-green-600">
                  {presentToday}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Total Absent</p>
                <p className="text-2xl font-bold text-red-600">
                  {absentToday}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-green-600 w-10 h-10 rounded-lg flex items-center justify-center">
                <HiOutlineBanknotes className="text-xl text-white" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  Finance Summary
                </h3>
                <p className="text-sm text-gray-500">
                  Student payment status records
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-gray-500">Total Paid</p>
                <p className="text-2xl font-bold text-green-600">
                  {paidStudents}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Total Unpaid</p>
                <p className="text-2xl font-bold text-red-600">
                  {unpaidStudents}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Not Marked Yet</p>
                <p className="text-2xl font-bold text-gray-800">
                  {pendingPayments}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard
