import React, { useState } from "react";

const steps = [
		{
			number: "01",
			title: "Discover & Strategize",
			desc:
				"We begin by deeply understanding your business, audience, and market. The outcome is a sharp, actionable strategy that aligns your vision with user needs and market demand.",
			icon: (
				<svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="2"/><path d="M12 8v4l3 2" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
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
				<svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="6" y="6" width="12" height="12" rx="3" stroke="#fff" strokeWidth="2"/><path d="M9 12h6" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
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
				<svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="2"/><path d="M8 12h8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
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
				<svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="6" y="6" width="12" height="12" rx="3" stroke="#fff" strokeWidth="2"/><path d="M12 8v8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
			),
			labels: ["Continuous Growth", "Smart Iterations"],
			color: "bg-blue-300",
		},
	];


export default function Method() {
	const [selected, setSelected] = useState(0);

	return (
		<section className="w-full bg-white py-16 flex justify-center">
			<div className="max-w-6xl w-full flex flex-col md:flex-row items-start gap-12 px-4 md:px-0">
				{/* Left: Steps */}
				<div className="flex-1 flex flex-col gap-8">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">The Mindor Method</h2>
					{steps.map((step, idx) => (
						<button
							key={step.number}
							className={`flex items-start gap-6 p-6 rounded-lg transition-all duration-200 text-left focus:outline-none border-2 ${selected === idx ? "border-blue-400 bg-blue-50" : "border-transparent"}`}
							onClick={() => setSelected(idx)}
							tabIndex={0}
						>
							<div className={`w-14 h-14 flex items-center justify-center rounded-md text-lg font-bold ${selected === idx ? "bg-blue-200 text-blue-700" : "bg-gray-200 text-gray-600"}`}>
								{step.number}
							</div>
							<div>
								<div className="font-semibold text-lg md:text-xl text-gray-800 mb-1">{step.title}</div>
								<div className="text-gray-600 text-base md:text-md leading-relaxed">{step.desc}</div>
							</div>
						</button>
					))}
				</div>
						{/* Right: Enhanced Stylized Card */}
						<div className="flex-1 flex justify-center items-center">
							<div className="relative w-[400px] h-[400px] rounded-3xl flex items-center justify-center shadow-xl bg-gradient-to-br from-blue-100 via-white to-blue-200">
								<div className="absolute inset-6 bg-white/80 rounded-2xl flex items-center justify-center shadow-2xl border border-blue-100 backdrop-blur-md">
									{/* Central Circle */}
									<div className="absolute top-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
										<div className="relative">
											<div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-200 to-blue-100 flex items-center justify-center shadow-lg">
												<div className="w-16 h-16 rounded-full bg-white border-4 border-blue-400 flex items-center justify-center text-2xl font-bold text-blue-700 shadow-md">M</div>
											</div>
										</div>
										{/* Vertical line */}
										<div className="w-1 h-24 bg-gradient-to-b from-blue-300 to-blue-100 mt-2 mb-2"></div>
										{/* Step Circles */}
										<div className="flex flex-row gap-8 mt-2">
											{steps.map((step, idx) => (
												<div
													key={step.number}
													className={`flex flex-col items-center transition-all duration-300 ${selected === idx ? "opacity-100 scale-110" : "opacity-40 scale-95"}`}
												>
													<div className={`w-14 h-14 rounded-full flex items-center justify-center ${step.color} transition-all duration-300 border-2 ${selected === idx ? "border-blue-400 shadow-xl" : "border-transparent"}`}>{step.icon}</div>
													{selected === idx && (
														<div className="flex flex-col items-center animate-fade-in">
															<span className="text-xs text-teal-600 mt-2 font-semibold drop-shadow">{step.labels[0]}</span>
															<span className="text-xs text-teal-500">{step.labels[1]}</span>
														</div>
													)}
												</div>
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
