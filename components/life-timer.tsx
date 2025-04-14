"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function LifeTimer() {
  const [age, setAge] = useState<number>(30);
  const [gender, setGender] = useState<string>("neutral");
  const [weeksLeft, setWeeksLeft] = useState<number>(0);
  const [daysLeft, setDaysLeft] = useState<number>(0);
  const [hoursLeft, setHoursLeft] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("weeks");

  const calculateTimeLeft = () => {
    const lifeExpectancy =
      gender === "male" ? 76 : gender === "female" ? 81 : 78;
    const yearsLeft = lifeExpectancy - age;

    const weeks = Math.max(0, Math.floor(yearsLeft * 52));
    const days = Math.max(0, Math.floor(yearsLeft * 365));
    const hours = Math.max(0, Math.floor(yearsLeft * 365 * 24));

    setWeeksLeft(weeks);
    setDaysLeft(days);
    setHoursLeft(hours);
    setShowResult(true);
  };

  return (
    <div className="relative max-w-[95vw] mx-auto">
      <h2 className="text-9xl md:text-8xl font-light mb-48 mt-96 tracking-tight">
        YOU HAVE A LIFE TO LIVE
      </h2>
      {!showResult ? (
        <div className="bg-white p-12 rounded-lg shadow-sm border max-w-4xl mx-auto">
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <label className="block text-xl mb-4 text-gray-500">
                  Your age
                </label>
                <Input
                  type="number"
                  min="1"
                  max="120"
                  value={age}
                  onChange={(e) => setAge(Number.parseInt(e.target.value) || 0)}
                  className="w-full text-xl h-12 p-6"
                />
              </div>
              <div>
                <label className="block text-xl mb-4 text-gray-600">
                  Your gender
                </label>
                <Select value={gender} onValueChange={setGender}>
                  <SelectTrigger className="w-full text-xl p-6 h-auto">
                    <SelectValue placeholder="Выберите пол" />
                  </SelectTrigger>
                  <SelectContent className="text-xl">
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Famale</SelectItem>
                    <SelectItem value="neutral">
                      I prefer not to specify
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button
              onClick={calculateTimeLeft}
              className="w-full rounded-full border-2 border-black p-8 text-xl bg-transparent text-black hover:bg-black hover:text-white transition-all duration-300"
            >
              RATIONALE?
            </Button>
          </div>
        </div>
      ) : (
        <div className="p-12 rounded-lg max-w-6xl mx-auto">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid grid-cols-3 mb-12 p-4 rounded-full bg-transparent">
              <TabsTrigger
                value="weeks"
                className="text-xl py-4 data-[state=active]:bg-black data-[state=active]:text-white rounded-full"
              >
                Week
              </TabsTrigger>
              <TabsTrigger
                value="days"
                className="text-xl py-4 data-[state=active]:bg-black data-[state=active]:text-white rounded-full"
              >
                Days
              </TabsTrigger>
              <TabsTrigger
                value="hours"
                className="text-xl py-4 data-[state=active]:bg-black data-[state=active]:text-white rounded-full"
              >
                Hours
              </TabsTrigger>
            </TabsList>

            <TabsContent value="weeks" className="text-center py-12">
              <div className="text-8xl md:text-9xl font-light mb-8">
                {weeksLeft.toLocaleString()}
              </div>
              <p className="text-3xl mb-16 text-gray-600">Weeks</p>

              <div className="grid grid-cols-10 gap-1 max-w-4xl mx-auto mb-16">
                {[...Array(Math.min(weeksLeft, 520))].map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square bg-black rounded-sm"
                    style={{
                      opacity: 0.8 - i / (Math.min(weeksLeft, 520) * 1.2),
                    }}
                  ></div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="days" className="text-center py-12">
              <div className="text-8xl md:text-9xl font-light mb-8">
                {daysLeft.toLocaleString()}
              </div>
              <p className="text-3xl mb-16 text-gray-600">Days</p>

              <div className="h-8 w-full bg-gray-100 rounded-full overflow-hidden mb-6">
                <div
                  className="h-full bg-black rounded-full"
                  style={{
                    width: `${Math.min(100, (daysLeft / (78 * 365)) * 100)}%`,
                  }}
                ></div>
              </div>
              <p className="text-xl text-gray-500 mb-12">
                That's about {Math.round((daysLeft / (78 * 365)) * 100)}% life
                expectancy
              </p>
            </TabsContent>

            <TabsContent value="hours" className="text-center py-12">
              <div className="text-8xl md:text-9xl font-light mb-8">
                {hoursLeft.toLocaleString()}
              </div>
              <p className="text-3xl mb-16 text-gray-600">Hours</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto text-left">
                <div className=" p-8 rounded-lg">
                  <p className="text-xl text-gray-500 mb-4">
                    If you sleep eight hours a day:
                  </p>
                  <p className="text-4xl font-light">
                    {Math.round(hoursLeft * 0.67).toLocaleString()} hours
                  </p>
                  <p className="text-xl text-gray-500 mt-2">wakefulness</p>
                </div>
                <div className=" p-8 rounded-lg">
                  <p className="text-xl text-gray-500 mb-4">
                    If you work 40 hours a week:
                  </p>
                  <p className="text-4xl font-light">
                    {Math.round(hoursLeft * 0.76).toLocaleString()} hours
                  </p>
                  <p className="text-xl text-gray-500 mt-2">free time</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-16 text-center">
            <Button
              onClick={() => setShowResult(false)}
              className="rounded-full border-2 border-black p-8 text-xl bg-transparent text-black hover:bg-black hover:text-white transition-all duration-300"
            >
              RECOGNIZE
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
