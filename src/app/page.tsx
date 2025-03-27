"use client"

import { useRouter } from 'next/navigation'

const Home = () => {
  const router = useRouter();

  const toTrashPage = () => {
    router.push("/trash-calendar");
  };

  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">ホームダッシュボード</h1>
          <div className="flex items-center gap-2">
            <i className="fas fa-user-circle text-gray-600"></i>
            <span>ユーザー</span>
          </div>
        </header>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">機能メニュー</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* <!-- ゴミ出し機能 - アクティブ --> */}
            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-blue-500 flex flex-col items-center justify-center min-h-48 transform hover:-translate-y-1 transition duration-300 cursor-pointer" onClick={toTrashPage}>
              <div className="text-blue-500 text-4xl mb-4">
                <i className="fas fa-trash"></i>
              </div>
              <div className="font-bold mb-1 text-center">ゴミ出しカレンダー</div>
              <div className="text-sm text-gray-600 text-center">ゴミ収集日の管理</div>
            </div>

            {/* <!-- 光熱費管理 - 非アクティブ --> */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col items-center justify-center min-h-48 opacity-70 cursor-not-allowed">
              <div className="text-gray-400 text-4xl mb-4">
                <i className="fas fa-bolt"></i>
              </div>
              <div className="font-bold mb-1 text-center">光熱費管理</div>
              <div className="text-sm text-red-500 italic text-center">Coming Soon...</div>
            </div>

            {/* <!-- 買い物リスト - 非アクティブ --> */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col items-center justify-center min-h-48 opacity-70 cursor-not-allowed">
              <div className="text-gray-400 text-4xl mb-4">
                <i className="fas fa-shopping-cart"></i>
              </div>
              <div className="font-bold mb-1 text-center">買い物リスト</div>
              <div className="text-sm text-red-500 italic text-center">Coming Soon...</div>
            </div>

            {/* <!-- 家事分担 - 非アクティブ --> */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col items-center justify-center min-h-48 opacity-70 cursor-not-allowed">
              <div className="text-gray-400 text-4xl mb-4">
                <i className="fas fa-broom"></i>
              </div>
              <div className="font-bold mb-1 text-center">家事分担</div>
              <div className="text-sm text-red-500 italic text-center">Coming Soon...</div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">データ集計</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* <!-- ゴミ出し統計 - 非アクティブ --> */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col items-center justify-center min-h-40 opacity-70">
              <div className="text-gray-400 text-3xl mb-3">
                <i className="fas fa-chart-bar"></i>
              </div>
              <div className="font-bold mb-1 text-center">ゴミ出し統計</div>
              <div className="text-sm text-red-500 italic text-center">Coming Soon...</div>
            </div>

            {/* <!-- 光熱費統計 - 非アクティブ --> */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col items-center justify-center min-h-40 opacity-70">
              <div className="text-gray-400 text-3xl mb-3">
                <i className="fas fa-chart-line"></i>
              </div>
              <div className="font-bold mb-1 text-center">光熱費統計</div>
              <div className="text-sm text-red-500 italic text-center">Coming Soon...</div>
            </div>

            {/* <!-- タスク完了率 - 非アクティブ --> */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col items-center justify-center min-h-40 opacity-70">
              <div className="text-gray-400 text-3xl mb-3">
                <i className="fas fa-tasks"></i>
              </div>
              <div className="font-bold mb-1 text-center">タスク完了率</div>
              <div className="text-sm text-red-500 italic text-center">Coming Soon...</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
