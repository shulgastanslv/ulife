"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TimeUsage() {
  const [activeTab, setActiveTab] = useState<string>("average")

  return (
    <div className="relative">
      <div
        className="absolute right-0 top-0 h-[300px] w-[300px] animate-pulse rounded-full bg-gradient-to-br from-blue-400 via-teal-300 to-green-200 opacity-70 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative">
        <h2 className="text-4xl font-light mb-8 tracking-tight">КАК МЫ ТРАТИМ ВРЕМЯ</h2>

        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="average">Средняя жизнь</TabsTrigger>
              <TabsTrigger value="activities">Активности</TabsTrigger>
              <TabsTrigger value="suggestions">Рекомендации</TabsTrigger>
            </TabsList>

            <TabsContent value="average" className="py-6">
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">Сон</span>
                    <span className="text-sm text-gray-600">26 лет</span>
                  </div>
                  <div className="h-4 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-black rounded-full" style={{ width: "33%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">Работа</span>
                    <span className="text-sm text-gray-600">13 лет</span>
                  </div>
                  <div className="h-4 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-black rounded-full" style={{ width: "17%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">Телевизор и соцсети</span>
                    <span className="text-sm text-gray-600">9 лет</span>
                  </div>
                  <div className="h-4 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-black rounded-full" style={{ width: "12%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">Еда и питье</span>
                    <span className="text-sm text-gray-600">4 года</span>
                  </div>
                  <div className="h-4 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-black rounded-full" style={{ width: "5%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">Образование</span>
                    <span className="text-sm text-gray-600">4 года</span>
                  </div>
                  <div className="h-4 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-black rounded-full" style={{ width: "5%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">Общение</span>
                    <span className="text-sm text-gray-600">3 года</span>
                  </div>
                  <div className="h-4 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-black rounded-full" style={{ width: "4%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">Другое</span>
                    <span className="text-sm text-gray-600">19 лет</span>
                  </div>
                  <div className="h-4 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-black rounded-full" style={{ width: "24%" }}></div>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-500 mt-8 text-center">
                Данные основаны на средней продолжительности жизни в 78 лет.
              </p>
            </TabsContent>

            <TabsContent value="activities" className="py-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                  <h3 className="text-xl font-light mb-4">Ежедн��вные действия</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span className="text-gray-600">Проверка телефона</span>
                      <span className="font-medium">2.5 часа</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Социальные сети</span>
                      <span className="font-medium">2.1 часа</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Телевизор</span>
                      <span className="font-medium">3.1 часа</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Чтение</span>
                      <span className="font-medium">0.3 часа</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Физическая активность</span>
                      <span className="font-medium">0.5 часа</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                  <h3 className="text-xl font-light mb-4">За всю жизнь</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span className="text-gray-600">В пробках</span>
                      <span className="font-medium">38,000 часов</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">В интернете</span>
                      <span className="font-medium">78,000 часов</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Смех</span>
                      <span className="font-medium">2,500 часов</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Секс</span>
                      <span className="font-medium">3,400 часов</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Упражнения</span>
                      <span className="font-medium">4,300 часов</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-sm text-gray-500 mt-8 text-center">
                Данные основаны на исследованиях среднестатистического использования времени.
              </p>
            </TabsContent>

            <TabsContent value="suggestions" className="py-6">
              <h3 className="text-xl font-light mb-6 text-center">Как использовать оставшееся время с пользой</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                  <h4 className="text-lg font-light mb-3">Личностный рост</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Изучи новый язык</li>
                    <li>• Читай книги регулярно</li>
                    <li>• Осваивай новые навыки</li>
                    <li>• Медитируй ежедневно</li>
                    <li>• Веди дневник</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                  <h4 className="text-lg font-light mb-3">Отношения</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Проводи время с близкими</li>
                    <li>• Говори о своих чувствах</li>
                    <li>• Слушай внимательно</li>
                    <li>• Прощай обиды</li>
                    <li>• Создавай совместные воспоминания</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                  <h4 className="text-lg font-light mb-3">Впечатления</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Путешествуй в новые места</li>
                    <li>• Пробуй новую еду</li>
                    <li>• Посещай культурные события</li>
                    <li>• Занимайся творчеством</li>
                    <li>• Выходи из зоны комфорта</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button
                  variant="outline"
                  className="rounded-full border-2 px-8"
                  onClick={() => {
                    window.open("https://bucketlist.org", "_blank")
                  }}
                >
                  <span className="relative">
                    СОЗДАТЬ СВОЙ СПИСОК ЖЕЛАНИЙ
                    <div className="absolute -left-4 -right-4 -top-4 -bottom-4 animate-spin-slow rounded-full border border-black opacity-50"></div>
                  </span>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
