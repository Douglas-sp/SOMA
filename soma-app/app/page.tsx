"use client"; // This tells the app this page is interactive
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient"; // This imports our "messenger"

export default function Home() {
  const [lessons, setLessons] = useState<any[]>([]);

  // This part runs as soon as the page opens
  useEffect(() => {
    async function getLessons() {
      // We ask Supabase to give us the lessons
      const { data } = await supabase.from("lessons").select("*");
      if (data) setLessons(data);
    }
    getLessons();
  }, []);

  return (
    <main className="flex flex-col items-center p-6 min-h-screen bg-gray-50">
      <header className="w-full py-8 text-center">
        <h1 className="text-4xl font-bold text-blue-900">SOMA</h1>
        <p className="text-lg text-gray-600 mt-2">Skills for your future</p>
      </header>

      <div className="w-full max-w-sm space-y-4">
        <h2 className="text-xl font-bold text-gray-800">Available Lessons:</h2>
        
        {/* This "map" looks through all lessons in our database and makes a button for each */}
        {lessons.map((lesson) => (
          <button 
            key={lesson.id}
            className="w-full p-6 bg-white border-2 border-blue-700 text-blue-900 rounded-2xl text-xl font-semibold shadow-sm text-left"
          >
            {lesson.title}
          </button>
        ))}

        {lessons.length === 0 && (
          <p className="text-gray-500">Loading lessons...</p>
        )}
      </div>
    </main>
  );
}