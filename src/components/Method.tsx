import React, { useState } from "react";

const steps = [
	{
		number: "01",
		title: "Discover & Strategize",
		desc:
			"We begin by deeply understanding your business, audience, and market. The outcome is a sharp, actionable strategy that aligns your vision with user needs and market demand.",
		icon: (
			<svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="2" /><path d="M12 8v4l3 2" stroke="#fff" strokeWidth="2" strokeLinecap="round" /></svg>
		),
		labels: ["Deep Understanding", "Actionable strategy"],
		color: "bg-blue-300",
	},
	{
		number: "02",
		title: "Design What Matters",
		desc:
			"Our team crafts seamless wireframes and high-impact UI/UX tailored for real users. Every element is designed to drive engagement, improve usability, and convert better.",
		icon: (
			<svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="6" y="6" width="12" height="12" rx="3" stroke="#fff" strokeWidth="2" /><path d="M9 12h6" stroke="#fff" strokeWidth="2" strokeLinecap="round" /></svg>
		),
		labels: ["High-impact UI/UX", "Seamless Design"],
		color: "bg-blue-400",
	},
	{
		number: "03",
		title: "Build for Performance",
		desc:
			"We develop scalable, secure, and high-performance products through agile sprints. Rigorous testing ensures stability, speed, and a flawless launch experience.",
		icon: (
			<svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="2" /><path d="M8 12h8" stroke="#fff" strokeWidth="2" strokeLinecap="round" /></svg>
		),
		labels: ["Scalable & Secure", "High Performance"],
		color: "bg-blue-300",
	},
	{
		number: "04",
		title: "Scale with Confidence",
		desc:
			"Post-launch, we focus on performance, updates, and smart iterations. Our goal is long-term success with continuous optimization and growth strategies that keep you ahead.",
		icon: (
			<svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="6" y="6" width="12" height="12" rx="3" stroke="#fff" strokeWidth="2" /><path d="M12 8v8" stroke="#fff" strokeWidth="2" strokeLinecap="round" /></svg>
		),
		labels: ["Continuous Growth", "Smart Iterations"],
		color: "bg-blue-300",
	},
];

export default function Method() {
	const [selected, setSelected] = useState(0);

	const indicatorLeft = `calc(${(selected / (steps.length - 1)) * 100}% - 30px)`;

	return (
		<section className="w-full bg-white py-14 md:py-16 flex justify-center">
			<div className="max-w-6xl w-full flex flex-col md:flex-row items-start gap-10 md:gap-12 px-4 md:px-0">

				<div className="flex-1 flex flex-col gap-4 md:gap-5">
					<h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">The Mindor Method</h2>

					{steps.map((step, idx) => (
						<button
							key={step.number}
							className={`group relative flex items-start gap-4 p-4 rounded-xl transition-all duration-200 text-left focus:outline-none ${selected === idx ? 'bg-blue-50/80 ring-1 ring-blue-100' : 'bg-transparent'
								}`}
							onClick={() => setSelected(idx)}
							tabIndex={0}
						>
							<div
								className={`w-10 h-10 flex items-center justify-center rounded-md text-sm font-semibold border ${selected === idx
										? 'bg-blue-100 text-blue-700 border-blue-200'
										: 'bg-gray-100 text-gray-600 border-gray-200'
									}`}
							>
								{step.number}
							</div>

							<div>
								<div className="font-semibold text-gray-900 text-base md:text-lg mb-1">
									{step.title}
								</div>
								<div className="text-gray-600 text-sm md:text-[15px] leading-relaxed">
									{step.desc}
								</div>
							</div>

							{selected === idx && (
								<span className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full bg-blue-300" />
							)}
						</button>
					))}
				</div>

				<div className="flex-1 flex justify-center items-center">
					<div className="relative w-[360px] h-[360px] md:w-[400px] md:h-[400px] rounded-3xl shadow-xl bg-gradient-to-br from-indigo-100 via-white to-blue-200">
						<div className="absolute inset-5 md:inset-6 bg-white/80 rounded-2xl shadow-2xl border border-blue-100/70 backdrop-blur-md" />

						<div className="absolute inset-0 flex flex-col items-center justify-center">

							<div className="relative mb-4">
								<div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-blue-200 to-blue-100 flex items-center justify-center shadow-lg">
									<div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border-4 border-blue-300 md:border-blue-400 flex items-center justify-center text-xl md:text-2xl font-bold text-blue-700 shadow-md">
										M
									</div>
								</div>
							</div>

							<div className="w-[6px] h-16 md:h-20 bg-gradient-to-b from-blue-300 to-blue-100 rounded-full mb-6" />
							<div className="relative w-full max-w-[280px] md:max-w-[320px]">
								<div className="relative flex justify-between items-center">
									{steps.map((step, idx) => (
										<button
											key={step.number}
											onClick={() => setSelected(idx)}
											className={`flex flex-col items-center transition-all duration-300 group ${selected === idx ? 'opacity-100 scale-110' : 'opacity-60 scale-95 hover:opacity-80'
												}`}
										>
											<div
												className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center ${step.color} transition-all duration-300 border-2 shadow-lg ${selected === idx
														? 'border-white shadow-xl ring-2 ring-blue-300 ring-offset-2'
														: 'border-transparent hover:border-white/50'
													}`}
											>
												{step.icon}
											</div>

											<div className={`transition-all duration-300 mt-2 ${selected === idx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
												}`}>
												{selected === idx && (
													<div className="flex flex-col items-center space-y-1">
														<span className="text-[10px] md:text-xs text-blue-700 font-semibold text-center leading-tight">
															{step.labels[0]}
														</span>
														<span className="text-[10px] md:text-xs text-blue-600 text-center leading-tight">
															{step.labels[1]}
														</span>
													</div>
												)}
											</div>
										</button>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}