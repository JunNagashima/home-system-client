"use client"

import { useRouter } from 'next/navigation'

const Trash1 = () => {
  const router = useRouter();

  const toDashBoard = () => {
    router.push("/");
  }

  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <header className="flex justify-between items-center mb-8">
          <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-600 transition" onClick={toDashBoard}>
            <i className="fas fa-arrow-left"></i> ダッシュボードに戻る
          </button>
          <h1 className="text-3xl font-bold text-gray-800">ゴミ出しカレンダー</h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-6">ゴミ収集日設定</h2>
              <form id="garbage-settings">
                {/* <!-- 燃えるゴミ --> */}
                <div className="mb-6 border-l-4 border-red-500 pl-4 py-2 bg-gray-50 rounded">
                  <div className="mb-4">
                    <label htmlFor="burnables-frequency" className="block font-bold mb-2">燃えるゴミ・頻度</label>
                    <select id="burnables-frequency" className="w-full p-2 border border-gray-300 rounded">
                      <option value="every-week">毎週</option>
                      <option value="alternate-weeks">隔週</option>
                      <option value="monthly">月１回</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="burnables-day" className="block font-bold mb-2">燃えるゴミ・曜日</label>
                    <select id="burnables-day" className="w-full p-2 border border-gray-300 rounded">
                      <option value="monday">月曜日</option>
                      <option value="tuesday">火曜日</option>
                      <option value="wednesday">水曜日</option>
                      <option value="thursday">木曜日</option>
                      <option value="friday">金曜日</option>
                      <option value="saturday">土曜日</option>
                    </select>
                  </div>
                </div>

                {/* <!-- 資源ごみ --> */}
                <div className="mb-6 border-l-4 border-green-500 pl-4 py-2 bg-gray-50 rounded">
                  <div className="mb-4">
                    <label htmlFor="recyclables-frequency" className="block font-bold mb-2">資源ごみ・頻度</label>
                    <select id="recyclables-frequency" className="w-full p-2 border border-gray-300 rounded">
                      <option value="every-week">毎週</option>
                      <option value="alternate-weeks">隔週</option>
                      <option value="monthly">月１回</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="recyclables-day" className="block font-bold mb-2">資源ごみ・曜日</label>
                    <select id="recyclables-day" className="w-full p-2 border border-gray-300 rounded">
                      <option value="monday">月曜日</option>
                      <option value="tuesday">火曜日</option>
                      <option value="wednesday">水曜日</option>
                      <option value="thursday">木曜日</option>
                      <option value="friday">金曜日</option>
                      <option value="saturday">土曜日</option>
                    </select>
                  </div>
                </div>

                {/* <!-- プラスチック --> */}
                <div className="mb-6 border-l-4 border-blue-500 pl-4 py-2 bg-gray-50 rounded">
                  <div className="mb-4">
                    <label htmlFor="plastics-frequency" className="block font-bold mb-2">プラスチック・頻度</label>
                    <select id="plastics-frequency" className="w-full p-2 border border-gray-300 rounded">
                      <option value="every-week">毎週</option>
                      <option value="alternate-weeks">隔週</option>
                      <option value="monthly">月１回</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="plastics-day" className="block font-bold mb-2">プラスチック・曜日</label>
                    <select id="plastics-day" className="w-full p-2 border border-gray-300 rounded">
                      <option value="monday">月曜日</option>
                      <option value="tuesday">火曜日</option>
                      <option value="wednesday">水曜日</option>
                      <option value="thursday">木曜日</option>
                      <option value="friday">金曜日</option>
                      <option value="saturday">土曜日</option>
                    </select>
                  </div>
                </div>

                {/* <!-- 不燃ごみ --> */}
                <div className="mb-6 border-l-4 border-yellow-500 pl-4 py-2 bg-gray-50 rounded">
                  <div className="mb-4">
                    <label htmlFor="non-burnables-frequency" className="block font-bold mb-2">不燃ごみ・頻度</label>
                    <select id="non-burnables-frequency" className="w-full p-2 border border-gray-300 rounded">
                      <option value="every-week">毎週</option>
                      <option value="alternate-weeks">隔週</option>
                      <option value="monthly">月１回</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="non-burnables-day" className="block font-bold mb-2">不燃ごみ・曜日</label>
                    <select id="non-burnables-day" className="w-full p-2 border border-gray-300 rounded">
                      <option value="monday">月曜日</option>
                      <option value="tuesday">火曜日</option>
                      <option value="wednesday">水曜日</option>
                      <option value="thursday">木曜日</option>
                      <option value="friday">金曜日</option>
                      <option value="saturday">土曜日</option>
                    </select>
                  </div>
                </div>

                <button type="submit" className="w-full bg-green-500 text-white py-3 px-4 rounded font-medium hover:bg-green-600 transition">カレンダーに反映</button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-4">
                  <button id="prev-month" className="text-blue-500 text-xl hover:text-blue-700">
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  <h2 id="current-month" className="text-xl font-semibold">2025年3月</h2>
                  <button id="next-month" className="text-blue-500 text-xl hover:text-blue-700">
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="p-2 bg-blue-500 text-white text-center">日</th>
                      <th className="p-2 bg-blue-500 text-white text-center">月</th>
                      <th className="p-2 bg-blue-500 text-white text-center">火</th>
                      <th className="p-2 bg-blue-500 text-white text-center">水</th>
                      <th className="p-2 bg-blue-500 text-white text-center">木</th>
                      <th className="p-2 bg-blue-500 text-white text-center">金</th>
                      <th className="p-2 bg-blue-500 text-white text-center">土</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-2 h-20 align-top bg-gray-100 text-gray-400">
                        <div className="font-bold mb-1">23</div>
                      </td>
                      <td className="border p-2 h-20 align-top bg-gray-100 text-gray-400">
                        <div className="font-bold mb-1">24</div>
                      </td>
                      <td className="border p-2 h-20 align-top bg-gray-100 text-gray-400">
                        <div className="font-bold mb-1">25</div>
                      </td>
                      <td className="border p-2 h-20 align-top bg-gray-100 text-gray-400">
                        <div className="font-bold mb-1">26</div>
                      </td>
                      <td className="border p-2 h-20 align-top bg-gray-100 text-gray-400">
                        <div className="font-bold mb-1">27</div>
                      </td>
                      <td className="border p-2 h-20 align-top bg-gray-100 text-gray-400">
                        <div className="font-bold mb-1">28</div>
                      </td>
                      <td className="border p-2 h-20 align-top">
                        <div className="font-bold mb-1">1</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-2 h-20 align-top">
                        <div className="font-bold mb-1">2</div>
                      </td>
                      <td className="border p-2 h-20 align-top">
                        <div className="font-bold mb-1">3</div>
                        <div className="bg-red-500 text-white text-xs py-1 px-2 rounded inline-block">燃えるゴミ</div>
                      </td>
                      <td className="border p-2 h-20 align-top">
                        <div className="font-bold mb-1">4</div>
                      </td>
                      <td className="border p-2 h-20 align-top">
                        <div className="font-bold mb-1">5</div>
                        <div className="bg-green-500 text-white text-xs py-1 px-2 rounded inline-block">資源ごみ</div>
                      </td>
                      <td className="border p-2 h-20 align-top">
                        <div className="font-bold mb-1">6</div>
                        <div className="bg-blue-500 text-white text-xs py-1 px-2 rounded inline-block">プラ</div>
                      </td>
                      <td className="border p-2 h-20 align-top">
                        <div className="font-bold mb-1">7</div>
                      </td>
                      <td className="border p-2 h-20 align-top">
                        <div className="font-bold mb-1">8</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-2 h-20 align-top">
                        <div className="font-bold mb-1">9</div>
                      </td>
                      <td className="border p-2 h-20 align-top">
                        <div className="font-bold mb-1">10</div>
                        <div className="bg-red-500 text-white text-xs py-1 px-2 rounded inline-block">燃えるゴミ</div>
                      </td>
                      <td className="border p-2 h-20 align-top">
                        <div className="font-bold mb-1">11</div>
                      </td>
                      <td className="border p-2 h-20 align-top">
                        <div className="font-bold mb-1">12</div>
                      </td>
                      <td className="border p-2 h-20 align-top">
                        <div className="font-bold mb-1">13</div>
                      </td>
                      <td className="border p-2 h-20 align-top">
                        <div className="font-bold mb-1">14</div>
                        <div className="bg-yellow-500 text-black text-xs py-1 px-2 rounded inline-block">不燃ごみ</div>
                      </td>
                      <td className="border p-2 h-20 align-top">
                        <div className="font-bold mb-1">15</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-2 h-20 align-top">
                        <div className="font-bold mb-1">16</div>
                      </td>
                      <td className="border p-2 h-20 align-top">
                        <div className="font-bold mb-1">17</div>
                        <div className="bg-red-500 text-white text-xs py-1 px-2 rounded inline-block">燃えるゴミ</div>
                      </td>
                      <td className="border p-2 h-20 align-top">
                        <div className="font-bold mb-1">18</div>
                      </td>
                      <td className="border p-2 h-20 align-top">
                        <div className="font-bold mb-1">19</div>
                        <div className="bg-green-500 text-white text-xs py-1 px-2 rounded inline-block">資源ごみ</div>
                      </td>
                      <td className="border p-2 h-20 align-top">
                        <div className="font-bold mb-1">20</div>
                        <div className="bg-blue-500 text-white text-xs py-1 px-2 rounded inline-block">プラ</div>
                      </td>
                      <td className="border p-2 h-20 align-top">
                        <div className="font-bold mb-1">21</div>
                      </td>
                      <td className="border-2 border-blue-500 p-2 h-20 align-top bg-blue-50">
                        <div className="font-bold mb-1">22</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-2 h-20 align-top">
                        <div className="font-bold mb-1">23</div>
                      </td>
                      <td className="border p-2 h-20 align-top">
                        <div className="font-bold mb-1">24</div>
                        <div className="bg-red-500 text-white text-xs py-1 px-2 rounded inline-block">燃えるゴミ</div>
                      </td>
                      <td className="border p-2 h-20 align-top">
                        <div className="font-bold mb-1">25</div>
                      </td>
                      <td className="border p-2 h-20 align-top">
                        <div className="font-bold mb-1">26</div>
                      </td>
                      <td className="border p-2 h-20 align-top">
                        <div className="font-bold mb-1">27</div>
                      </td>
                      <td className="border p-2 h-20 align-top">
                        <div className="font-bold mb-1">28</div>
                        <div className="bg-yellow-500 text-black text-xs py-1 px-2 rounded inline-block">不燃ごみ</div>
                      </td>
                      <td className="border p-2 h-20 align-top">
                        <div className="font-bold mb-1">29</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-2 h-20 align-top">
                        <div className="font-bold mb-1">30</div>
                      </td>
                      <td className="border p-2 h-20 align-top">
                        <div className="font-bold mb-1">31</div>
                        <div className="bg-red-500 text-white text-xs py-1 px-2 rounded inline-block">燃えるゴミ</div>
                      </td>
                      <td className="border p-2 h-20 align-top bg-gray-100 text-gray-400">
                        <div className="font-bold mb-1">1</div>
                      </td>
                      <td className="border p-2 h-20 align-top bg-gray-100 text-gray-400">
                        <div className="font-bold mb-1">2</div>
                      </td>
                      <td className="border p-2 h-20 align-top bg-gray-100 text-gray-400">
                        <div className="font-bold mb-1">3</div>
                      </td>
                      <td className="border p-2 h-20 align-top bg-gray-100 text-gray-400">
                        <div className="font-bold mb-1">4</div>
                      </td>
                      <td className="border p-2 h-20 align-top bg-gray-100 text-gray-400">
                        <div className="font-bold mb-1">5</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-500 rounded"></div>
                  <span className="text-sm">燃えるゴミ</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded"></div>
                  <span className="text-sm">資源ごみ</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-500 rounded"></div>
                  <span className="text-sm">プラスチック</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                  <span className="text-sm">不燃ごみ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trash1;
