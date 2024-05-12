import React from 'react'

const Footer = () => {
  return (
    <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
    <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="space-y-8 xl:col-span-1">
            <h2>LOGO</h2>
            <p class="text-base text-gray-600 "></p>
        </div>
        <div class="grid grid-cols-2 gap-8 mt-12 xl:mt-0 xl:col-span-2">
            <div class="md:grid md:grid-cols-2 md:gap-8">
                <div>
                    <h3 class="text-sm font-semibold tracking-wider text-gray-600 uppercase ">Classes</h3>
                    <ul role="list" class="mt-4 space-y-2 list-none">
                        
                        <li><a href="/upcoming" class="text-base text-gray-500 hover:text-gray-900 ">Upcoming Classes</a></li>
                        <li><a href="/recordings" class="text-base text-gray-500 hover:text-gray-900 ">Recorded Classes</a></li>
                        <li><a href="/calendar" class="text-base text-gray-500 hover:text-gray-900 ">Class Schedule</a></li>
                        
                    </ul>
                </div>
                <div class="mt-12 md:mt-0">
                    <h3 class="text-sm font-semibold tracking-wider text-gray-600 uppercase ">Study Plans</h3>
                    <ul role="list" class="mt-4 space-y-2 list-none">
                        
                        <li><a href="/study-plans/one-month-study-plan-version-2" class="text-base text-gray-500 hover:text-gray-900 ">1 Month Study Plan V2.0</a></li>
                        <li><a href="/study-plans/two-months-study-plan" class="text-base text-gray-500 hover:text-gray-900 ">2 Month Study Plan</a></li>
                        <li><a href="/study-plans/toefl-2-week-study-plan" class="text-base text-gray-500 hover:text-gray-900 ">TOEFL Study Plan</a></li>
                        
                    </ul>
                </div>
            </div>
            <div class="md:grid md:grid-cols-2 md:gap-8">
                <div>
                    <h3 class="text-sm font-semibold tracking-wider text-gray-600 uppercase ">Problem Solving</h3>
                    <ul role="list" class="mt-4 space-y-2 list-none">
                        
                        <li><a href="/problems/quant" class="text-base text-gray-500 hover:text-gray-900 ">Quant</a></li>
                        <li><a href="/problems/verbal" class="text-base text-gray-500 hover:text-gray-900 ">Verbal</a></li>
                        <li><a href="/course/gre-mini-exams" class="text-base text-gray-500 hover:text-gray-900 ">GRE Mini Exams</a></li>
                        <li><a href="/course-group/various-quizzes" class="text-base text-gray-500 hover:text-gray-900 ">Various Quizzes</a></li>
                        
                    </ul>
                </div>
                <div class="mt-12 md:mt-0">
                    <h3 class="text-sm font-semibold tracking-wider text-gray-600 uppercase ">More</h3>
                    <ul role="list" class="mt-4 space-y-2 list-none">
                        
                        <li><a href="/pricing" class="text-base text-gray-500 hover:text-gray-900 ">Pricing</a></li>
                        <li><a href="https://forums.gregmat.com" rel="noopener noreferrer" class="text-base text-gray-500 hover:text-gray-900 ">Forums</a></li>
                        <li><a href="/feed" class="text-base text-gray-500 hover:text-gray-900 ">Feed</a></li>
                        <li><a href="/tools" class="text-base text-gray-500 hover:text-gray-900 ">Tools</a></li>
                        <li><a href="/practice" class="text-base text-gray-500 hover:text-gray-900 ">Practice</a></li>
                        
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="pt-8 mt-12 border-t border-gra "><p class="text-base hover:text-gray-900  xl:text-center">© Sashvat Jain. All rights reserved.</p></div>
</div>

  )
}

export default Footer