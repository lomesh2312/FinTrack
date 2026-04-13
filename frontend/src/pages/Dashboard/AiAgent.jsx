import React from 'react';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import { LuExternalLink, LuBrain } from "react-icons/lu";

const AiAgent = () => {
  return (
    <DashboardLayout activeMenu='AI Agent'>
      <div className='my-2 mx-auto max-w-7xl px-4 py-8'>
        <div className='mb-10 animate-fade-in-up text-center'>
            <div className='w-16 h-16 bg-[#F8F7FF] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-[#DDD6FE]'>
                <LuBrain className='text-[#7C5CFC] text-3xl' />
            </div>
          <h1 className='text-[32px] font-extrabold text-[#7C5CFC] leading-tight mb-4'>
            AI <span className='text-[#7C5CFC]'>Risk Agent</span>
          </h1>
          <p className='text-[18px] text-[#5B5580] max-w-2xl mx-auto font-medium leading-relaxed'>
            Want to take a loan?! Analyse its risk and also look how bank classifies you.
          </p>
        </div>

        <div className='grid grid-cols-1 gap-8 animate-fade-in-up delay-100 max-w-3xl mx-auto'>
          <div className='card flex flex-col items-center text-center p-12 border-dashed border-2 border-[#C4B5FD] bg-[#F7F5FF]/50 shadow-none hover:shadow-xl hover:translate-y-0 transition-all cursor-default'>
            <div className='w-20 h-20 bg-white rounded-3xl flex items-center justify-center mb-8 shadow-sm border border-[#F0EEFF]'>
                <LuBrain className='text-[#7C5CFC] text-4xl' />
            </div>
            
            <h3 className='text-[22px] font-bold text-[#7C5CFC] mb-4'>Credit Risk Analyser</h3>
            <p className='text-[15px] text-[#9B8EC4] mb-10'>
              Get an instant assessment of your creditworthiness using our advanced AI models. Analyze bank classification risks before you apply.
            </p>

            <a 
              href="https://ai-credit-risk-advisor.streamlit.app/#explanation"
              target="_blank" 
              rel="noopener noreferrer"
              className='group relative inline-flex items-center justify-center gap-3 bg-[#7C5CFC] text-white px-10 py-5 rounded-2xl font-bold text-[16px] shadow-lg shadow-[#7C5CFC]/30 hover:bg-[#6D4EE0] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto'
            >
              Click here
              <LuExternalLink className='text-[18px] group-hover:translate-x-1 duration-300 transition-transform' />
            </a>
            
            <p className='mt-4 text-[13px] text-[#9B8EC4] font-medium italic'>
                * Redirection to our secure AI processing engine
            </p>
          </div>
        </div>

        <div className='mt-16 text-center animate-fade-in-up delay-200'>
            <div className='h-px bg-gradient-to-r from-transparent via-[#EEE9FF] to-transparent mb-10 max-w-md mx-auto'></div>
            <p className='text-[13px] text-[#9B8EC4] font-semibold uppercase tracking-[0.2em] mb-4'>Powered by</p>
            <div className='flex items-center justify-center gap-8 grayscale opacity-60'>
                <div className='text-[#7C5CFC] font-bold text-lg tracking-tighter'>FinTrack<span className='text-[#7C5CFC]'>AI</span></div>
            </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AiAgent;
