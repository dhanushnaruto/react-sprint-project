import React, { useState } from 'react';
import { Search, MapPin, Star, X, ArrowLeft, Calendar, Clock, User, MessageSquare, Video, Shield, Award, Briefcase, Heart, Baby, Stethoscope, Activity } from 'lucide-react';

const AmrutamWebpage = () => {
  const [currentView, setCurrentView] = useState('search'); 
  const [selectedFilters, setSelectedFilters] = useState({
    hairCare: true,
    female: true,
    fee: true,
    hindi: true
  });
  const [selectedMode, setSelectedMode] = useState('in-clinic');
  const [selectedDate, setSelectedDate] = useState('10 Oct');
  const [selectedTime, setSelectedTime] = useState('11:00 AM');

  const removeFilter = (filterKey) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterKey]: false
    }));
  };

  const doctorData = {
    name: "Dr. Bruce Willis",
    specialty: "Gynecologist",
    rating: 4.2,
    followers: "850",
    following: "18K",
    posts: "250",
    experience: "7+ YEARS",
    languages: ["English", "Hindi", "Telugu"],
    fees: 699.00,
    clinics: [
      { name: "Midtown Medical Clinic", role: "Senior doctor", period: "2016-PRESENT" },
      { name: "Midtown Medical Clinic", role: "Senior doctor", period: "2010-2015" }
    ]
  };

  const timeSlots = {
    morning: ["09:00 AM", "09:30 AM", "10:00 AM", "10:15 AM", "10:45 AM", "11:00 AM"],
    evening: ["04:00 PM", "04:15 PM", "04:30 PM", "04:45 PM", "05:15 PM"]
  };

  if (currentView === 'profile') {
    return (
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <button 
                  onClick={() => setCurrentView('search')}
                  className="mr-4 p-2 hover:bg-gray-100 rounded-full"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
                <h1 className="text-2xl font-bold text-green-700">AMRUTAM</h1>
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="#" className="text-gray-700 hover:text-green-700">Home</a>
                <a href="#" className="text-gray-700 hover:text-green-700">Find Doctors</a>
                <a href="#" className="text-gray-700 hover:text-green-700">About Us</a>
              </nav>
              <div className="flex space-x-4">
                <button className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50">
                  Login
                </button>
                <button className="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800">
                  Sign-up
                </button>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face"
                      alt="Dr. Bruce Willis"
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white rounded-full p-1">
                      <Shield className="h-3 w-3" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-xl font-bold text-gray-900">{doctorData.name}</h2>
                        <p className="text-gray-600">{doctorData.specialty}</p>
                        <div className="flex items-center mt-1">
                          <div className="flex text-yellow-400">
                            {[1,2,3,4].map(i => <Star key={i} className="h-4 w-4 fill-current" />)}
                            <Star className="h-4 w-4" />
                          </div>
                          <span className="ml-2 text-sm text-gray-600">{doctorData.rating}</span>
                        </div>
                      </div>
                      <button className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800">
                        Book an Appointment
                      </button>
                    </div>
                    
                    <div className="flex space-x-8 mt-4 text-sm">
                      <div className="text-center">
                        <div className="font-semibold">{doctorData.followers}</div>
                        <div className="text-gray-600">Followers</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold">{doctorData.following}</div>
                        <div className="text-gray-600">Following</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold">{doctorData.posts}</div>
                        <div className="text-gray-600">Posts</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">A Little About me</h3>
                  <button className="text-gray-500 border border-gray-300 px-3 py-1 rounded text-sm">
                    Follow +
                  </button>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Hello I am Dr. Bruce Willis a Gynecologist in Sanjeevan Hospital Surat. love to work with my hospital staff and senile patients. I love to explain medical procedures to patients and their family members. Apart from my medical work, I'm a social media consultant who creates content that empowers people to take control of their health.
                </p>
                <button className="text-gray-500 text-sm underline">Read More</button>

                <div className="mt-6">
                  <h4 className="font-medium mb-3">Language Spoken</h4>
                  <div className="flex flex-wrap gap-2">
                    {doctorData.languages.map(lang => (
                      <span key={lang} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4 mt-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-sm">f</span>
                  </div>
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                    <span className="text-pink-600 text-sm">📷</span>
                  </div>
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-sm">in</span>
                  </div>
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 text-sm">▶</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4">I Specialize In</h3>
                <div className="grid grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Heart className="h-8 w-8 text-pink-500" />
                    </div>
                    <p className="text-sm">Women's Health</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Activity className="h-8 w-8 text-green-500" />
                    </div>
                    <p className="text-sm">Skin Care</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Shield className="h-8 w-8 text-blue-500" />
                    </div>
                    <p className="text-sm">Immunity</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Stethoscope className="h-8 w-8 text-orange-500" />
                    </div>
                    <p className="text-sm">Hair Care</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4">The Concerns I Treat</h3>
                <div className="flex flex-wrap gap-2">
                  {["Skin Treatment", "Pregnancy", "Period Doubts", "Endometriosis", "Pelvic Pain", "Ovarian Cysts", "+ 5 More"].map(concern => (
                    <span key={concern} className="bg-gray-100 px-3 py-2 rounded-lg text-sm">
                      {concern}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4">My Work Experience</h3>
                <p className="text-green-600 font-medium mb-4">I HAVE BEEN IN PRACTICE FOR : {doctorData.experience}</p>
                <div className="space-y-4">
                  {doctorData.clinics.map((clinic, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                        <Briefcase className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">{clinic.name}</h4>
                        <p className="text-gray-600 text-sm">{clinic.role}</p>
                        <p className="text-gray-500 text-sm">{clinic.period}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>


              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Featured Reviews (102)</h3>
                <div className="space-y-4">
                  {[1, 2].map(review => (
                    <div key={review} className="border-b border-gray-100 pb-4">
                      <div className="flex items-start space-x-3">
                        <img 
                          src={`https://images.unsplash.com/photo-${review === 1 ? '1494790108755-2616c667e482' : '1438761681033-6461ffad8d80'}?w=40&h=40&fit=crop&crop=face`}
                          alt="Reviewer"
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">Alicent Hightower</h4>
                            <span className="text-gray-500 text-sm">20 January 2023</span>
                          </div>
                          <p className="text-gray-600 text-sm">Consulted for Skin care</p>
                          <div className="flex text-yellow-400 my-1">
                            {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-current" />)}
                          </div>
                          <p className="text-sm text-gray-700">
                            Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write a review again after using it for longer periods
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-right mb-4">
                  <p className="text-sm text-gray-600">Appointment Fee</p>
                  <p className="text-2xl font-bold text-green-600">₹{doctorData.fees}</p>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Select your mode of session</h3>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => setSelectedMode('in-clinic')}
                      className={`p-3 rounded-lg text-center text-sm ${
                        selectedMode === 'in-clinic' 
                          ? 'bg-green-100 text-green-700 border border-green-300' 
                          : 'bg-gray-50 text-gray-600'
                      }`}
                    >
                      In-Clinic<br />45 Mins
                    </button>
                    <button
                      onClick={() => setSelectedMode('video')}
                      className={`p-3 rounded-lg text-center text-sm ${
                        selectedMode === 'video' 
                          ? 'bg-green-100 text-green-700 border border-green-300' 
                          : 'bg-gray-50 text-gray-600'
                      }`}
                    >
                      <Video className="h-4 w-4 mx-auto mb-1" />
                      Video<br />45 Mins
                    </button>
                    <button
                      onClick={() => setSelectedMode('chat')}
                      className={`p-3 rounded-lg text-center text-sm ${
                        selectedMode === 'chat' 
                          ? 'bg-green-100 text-green-700 border border-green-300' 
                          : 'bg-gray-50 text-gray-600'
                      }`}
                    >
                      <MessageSquare className="h-4 w-4 mx-auto mb-1" />
                      Chat<br />10 Mins
                    </button>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Pick a time slot</h3>
                  <div className="flex items-center justify-between mb-4 text-sm">
                    <Calendar className="h-4 w-4" />
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 bg-green-700 text-white rounded text-xs">
                        Mon, 10 Oct<br />10 slots
                      </button>
                      <button className="px-3 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                        Tue, 11 Oct<br />02 slots
                      </button>
                      <button className="px-3 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                        Wed, 12 Oct<br />05 slots
                      </button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Morning</h4>
                      <div className="grid grid-cols-3 gap-2">
                        {timeSlots.morning.map(time => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`p-2 text-xs rounded border ${
                              selectedTime === time
                                ? 'bg-green-700 text-white border-green-700'
                                : 'bg-white text-gray-700 border-gray-300 hover:border-green-300'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Evening</h4>
                      <div className="grid grid-cols-3 gap-2">
                        {timeSlots.evening.map(time => (
                          <button
                            key={time}
                            className="p-2 text-xs rounded border bg-white text-gray-700 border-gray-300 hover:border-green-300"
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 font-medium">
                  Make An Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-green-700">AMRUTAM</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-green-700">Home</a>
              <a href="#" className="text-gray-700 hover:text-green-700">Find Doctors</a>
              <a href="#" className="text-gray-700 hover:text-green-700">About Us</a>
            </nav>
            <div className="flex space-x-4">
              <button className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50">
                Login
              </button>
              <button className="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800">
                Sign-up
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="bg-gradient-to-r from-green-50 to-green-100 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Find Expert Doctors For An In-Clinic Session Here
          </h2>
          
          <div className="flex max-w-2xl mx-auto bg-white rounded-lg shadow-sm">
            <div className="flex items-center px-4 py-3 border-r border-gray-200">
              <MapPin className="h-5 w-5 text-gray-400 mr-2" />
              <select className="bg-transparent text-gray-700 outline-none">
                <option>Select Location</option>
              </select>
            </div>
            <div className="flex-1 px-4">
              <input
                type="text"
                placeholder="eg. Doctor, specialisation, clinic name"
                className="w-full py-3 outline-none text-gray-700"
              />
            </div>
            <button className="px-6 py-3 bg-green-700 text-white rounded-r-lg hover:bg-green-800">
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-wrap gap-4 items-center mb-6">
          <div className="flex space-x-4">
            <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white">
              <option>Expertise</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white">
              <option>Gender</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white">
              <option>Fees</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white">
              <option>Languages</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-green-700">
              <option>All filters</option>
            </select>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {selectedFilters.hairCare && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700">
              Hair care
              <button 
                onClick={() => removeFilter('hairCare')}
                className="ml-2 text-gray-400 hover:text-gray-600"
              >
                <X className="h-4 w-4" />
              </button>
            </span>
          )}
          {selectedFilters.female && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700">
              Female
              <button 
                onClick={() => removeFilter('female')}
                className="ml-2 text-gray-400 hover:text-gray-600"
              >
                <X className="h-4 w-4" />
              </button>
            </span>
          )}
          {selectedFilters.fee && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700">
              Rs.0-Rs.500
              <button 
                onClick={() => removeFilter('fee')}
                className="ml-2 text-gray-400 hover:text-gray-600"
              >
                <X className="h-4 w-4" />
              </button>
            </span>
          )}
          {selectedFilters.hindi && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700">
              Hindi
              <button 
                onClick={() => removeFilter('hindi')}
                className="ml-2 text-gray-400 hover:text-gray-600"
              >
                <X className="h-4 w-4" />
              </button>
            </span>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((index) => (
            <div key={index} className="bg-cream-50 rounded-lg p-6 shadow-sm border border-yellow-100">
              <div className="relative mb-4">
                <div className="w-24 h-24 mx-auto rounded-full bg-gray-200 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face"
                    alt="Dr. Prerna Narang"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs flex items-center">
                  <span className="mr-1">4.5</span>
                  <Star className="h-3 w-3 fill-current text-yellow-400" />
                </div>
              </div>

              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Dr. Prerna Narang
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center justify-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Male-Female Infertility
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    7 years of Experience
                  </div>
                  <div className="flex items-center justify-center text-xs">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Speaks: English, Hindi, Marathi
                  </div>
                </div>
              </div>

              <div className="flex justify-between text-xs mb-4">
                <div className="text-center">
                  <div>Video Consultation</div>
                  <div className="font-semibold">₹800</div>
                </div>
                <div className="text-center">
                  <div>Chat Consultation</div>
                  <div className="font-semibold text-green-600">Free</div>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full py-2 text-green-700 border border-green-700 rounded-lg hover:bg-green-50 transition-colors">
                  View Profile
                </button>
                <button 
                  onClick={() => setCurrentView('profile')}
                  className="w-full py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors"
                >
                  Book a consultation
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AmrutamWebpage;