
import React from 'react';
import Header from '@/components/Header';
import Section from '@/components/Section';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from '@/components/ui/button';
import { CalendarDays, Droplets, MessageSquare, Shield, User, Users, Wheat } from 'lucide-react';

const NiloticWisdom = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Banner */}
        <div className="nilotic-theme cultural-pattern py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Nilotic Wisdom</h1>
              <p className="text-xl opacity-90">Honor your warrior heritage, pastoral traditions, and clan authority</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-12">
          <Tabs defaultValue="herd-registry">
            <div className="mb-6">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <TabsTrigger value="herd-registry" className="text-center">
                  <Wheat className="h-4 w-4 mr-2" />
                  Herd Registry
                </TabsTrigger>
                <TabsTrigger value="warrior-rites" className="text-center">
                  <Shield className="h-4 w-4 mr-2" />
                  Warrior Rites
                </TabsTrigger>
                <TabsTrigger value="council-room" className="text-center">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Council Room
                </TabsTrigger>
                <TabsTrigger value="water-tracker" className="text-center">
                  <Droplets className="h-4 w-4 mr-2" />
                  Water Tracker
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="herd-registry" className="border rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-6">Herd Registry with Generational Tags</h2>

              <div className="bg-nilotic/10 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-semibold mb-2">Herd Wisdom</h3>
                <blockquote className="italic border-l-4 border-nilotic pl-4">
                  "A man without cattle is a man without identity."
                  <footer className="text-sm mt-2">— Dinka Proverb</footer>
                </blockquote>
              </div>
              
              <div className="mb-10">
                <Card>
                  <CardHeader>
                    <CardTitle>Cattle Lineage Record</CardTitle>
                    <CardDescription>Track your herd's history and ancestral connections</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-white border rounded-lg p-4 mb-4">
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold">Herd Summary</h3>
                        <span className="bg-nilotic text-white px-2 py-1 rounded text-xs">38 Cattle</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mt-4">
                        <div>
                          <p className="text-sm text-gray-500">Breeding Cows</p>
                          <p>14</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Bulls</p>
                          <p>3</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Calves (This Year)</p>
                          <p>7</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Young Stock</p>
                          <p>14</p>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t">
                        <p className="text-sm text-gray-500">Primary Grazing Area</p>
                        <p>Rift Valley Highlands, Southern Pastures</p>
                      </div>
                    </div>
                    
                    <h3 className="font-medium mb-3">Generational Tags</h3>
                    <ScrollArea className="h-48 rounded-md border p-4">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3 pb-3 border-b">
                          <div className="mt-1">
                            <div className="h-3 w-3 rounded-full bg-red-500"></div>
                          </div>
                          <div>
                            <h4 className="font-semibold">Akicheek Generation</h4>
                            <p className="text-sm text-gray-600">Origin: Drought rescue cattle from grandfather's era (1970s)</p>
                            <p className="text-sm text-gray-600">Notable traits: Drought resistant, distinctive white patches</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3 pb-3 border-b">
                          <div className="mt-1">
                            <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                          </div>
                          <div>
                            <h4 className="font-semibold">Nyang Generation</h4>
                            <p className="text-sm text-gray-600">Origin: Bride price cattle from Turkana alliance (1990s)</p>
                            <p className="text-sm text-gray-600">Notable traits: Long horns, high milk production</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3 pb-3 border-b">
                          <div className="mt-1">
                            <div className="h-3 w-3 rounded-full bg-green-500"></div>
                          </div>
                          <div>
                            <h4 className="font-semibold">Mabior Generation</h4>
                            <p className="text-sm text-gray-600">Origin: Peace agreement compensation cattle (2000s)</p>
                            <p className="text-sm text-gray-600">Notable traits: Disease resistant, fast growth</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="mt-1">
                            <div className="h-3 w-3 rounded-full bg-purple-500"></div>
                          </div>
                          <div>
                            <h4 className="font-semibold">Changkuoth Generation</h4>
                            <p className="text-sm text-gray-600">Origin: Modern cross-bred with improved genetics (2010s)</p>
                            <p className="text-sm text-gray-600">Notable traits: Higher market value, adaptable to changing climate</p>
                          </div>
                        </div>
                      </div>
                    </ScrollArea>
                    
                    <div className="mt-4 flex justify-end">
                      <Button>Add New Tag</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Section title="Recent Herd Activities">
                <div className="space-y-4">
                  <div className="bg-white rounded-lg border p-4">
                    <div className="flex justify-between">
                      <h3 className="font-semibold">Seasonal Migration</h3>
                      <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">3 days ago</span>
                    </div>
                    <p className="mt-1 text-sm">Moved 24 cattle to higher pastures due to seasonal drought conditions.</p>
                  </div>
                  
                  <div className="bg-white rounded-lg border p-4">
                    <div className="flex justify-between">
                      <h3 className="font-semibold">New Birth</h3>
                      <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">1 week ago</span>
                    </div>
                    <p className="mt-1 text-sm">Red cow with Nyang bloodline birthed healthy female calf.</p>
                  </div>
                  
                  <div className="bg-white rounded-lg border p-4">
                    <div className="flex justify-between">
                      <h3 className="font-semibold">Veterinary Visit</h3>
                      <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">2 weeks ago</span>
                    </div>
                    <p className="mt-1 text-sm">Vaccination and health check completed for entire herd.</p>
                  </div>
                </div>
              </Section>
            </TabsContent>
            
            <TabsContent value="warrior-rites" className="border rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-6">Warrior Rite of Passage Timeline</h2>
              
              <div className="mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Age-Set System</CardTitle>
                    <CardDescription>Traditional progression of warrior status</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative">
                      <div className="absolute left-1.5 top-0 h-full w-0.5 bg-nilotic/20"></div>
                      
                      <div className="relative pl-8 pb-10">
                        <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full bg-nilotic"></div>
                        <h3 className="font-semibold text-lg">Junior Warrior (Barnoti)</h3>
                        <p className="text-sm text-gray-500">Ages 15-18</p>
                        <div className="mt-2">
                          <p className="mb-2">Initial training period where young men learn basic warrior skills:</p>
                          <ul className="list-disc ml-5 text-sm">
                            <li>Spear throwing and combat techniques</li>
                            <li>Tracking animals and reading natural signs</li>
                            <li>Herd protection strategies</li>
                            <li>Cultural songs and dances</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="relative pl-8 pb-10">
                        <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full bg-nilotic"></div>
                        <h3 className="font-semibold text-lg">Senior Warrior (Moran)</h3>
                        <p className="text-sm text-gray-500">Ages 18-25</p>
                        <div className="mt-2">
                          <p className="mb-2">Full warrior status with responsibilities to the community:</p>
                          <ul className="list-disc ml-5 text-sm">
                            <li>Defense of community and herds</li>
                            <li>Participation in raiding parties (historical)</li>
                            <li>Leadership in ceremonial events</li>
                            <li>Courtship period</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="relative pl-8 pb-10">
                        <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full bg-nilotic"></div>
                        <h3 className="font-semibold text-lg">Junior Elder (Koret)</h3>
                        <p className="text-sm text-gray-500">Ages 25-35</p>
                        <div className="mt-2">
                          <p className="mb-2">Transition to elder status with new responsibilities:</p>
                          <ul className="list-disc ml-5 text-sm">
                            <li>Marriage and family formation</li>
                            <li>Herd accumulation and management</li>
                            <li>Beginning to participate in community decisions</li>
                            <li>Mentorship of junior warriors</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="relative pl-8">
                        <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full bg-nilotic"></div>
                        <h3 className="font-semibold text-lg">Senior Elder (Payyan)</h3>
                        <p className="text-sm text-gray-500">Ages 35+</p>
                        <div className="mt-2">
                          <p className="mb-2">Full community authority and wisdom keeping:</p>
                          <ul className="list-disc ml-5 text-sm">
                            <li>Judicial authority in disputes</li>
                            <li>Blessing ceremonies and ritual leadership</li>
                            <li>Land and resource allocation decisions</li>
                            <li>Custodians of oral history and traditional knowledge</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Section title="Current Age-Set Status">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader className="bg-nilotic text-white">
                      <CardTitle>Iltuati Age-Set</CardTitle>
                      <CardDescription className="text-white/80">Currently in Senior Warrior Phase (2018-2026)</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <div className="space-y-3">
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">Age-Set Leader</h4>
                          <p>Lemaiyan Ole Kipury</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">Key Achievements</h4>
                          <p className="text-sm">Successfully protected communities during the 2021 drought crisis. Led reforestation of traditional grazing grounds.</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">Upcoming Ceremonies</h4>
                          <div className="flex gap-2 mt-1">
                            <span className="bg-nilotic/10 text-nilotic px-2 py-1 rounded text-xs">Eunoto Ceremony (2026)</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="bg-gray-100">
                      <CardTitle>Ilmeshuki Age-Set</CardTitle>
                      <CardDescription>Preparing for Junior Warrior Phase (2024)</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <div className="space-y-3">
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">Pre-Warrior Training</h4>
                          <p>Currently undergoing traditional education and preparation</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">Mentors</h4>
                          <p className="text-sm">Senior warriors from Iltuati Age-Set and Junior Elders from Ilmerishari Age-Set</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">Upcoming Initiation</h4>
                          <div className="flex gap-2 mt-1">
                            <span className="bg-nilotic/10 text-nilotic px-2 py-1 rounded text-xs">Emuratta Ceremony (December 2024)</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </Section>
            </TabsContent>

            <TabsContent value="council-room" className="border rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-6">Community Council Chatroom</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="md:col-span-1">
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle>Active Councils</CardTitle>
                      <CardDescription>Current deliberation groups</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="divide-y">
                        <div className="p-4 hover:bg-gray-50 cursor-pointer">
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-nilotic" />
                            <h3 className="font-medium">Elders Council</h3>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">12 Members Active</p>
                        </div>
                        
                        <div className="p-4 hover:bg-gray-50 cursor-pointer bg-nilotic/5">
                          <div className="flex items-center gap-2">
                            <Shield className="h-4 w-4 text-nilotic" />
                            <h3 className="font-medium">Warriors' Assembly</h3>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">23 Members Active</p>
                        </div>
                        
                        <div className="p-4 hover:bg-gray-50 cursor-pointer">
                          <div className="flex items-center gap-2">
                            <Droplets className="h-4 w-4 text-nilotic" />
                            <h3 className="font-medium">Water Committee</h3>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">8 Members Active</p>
                        </div>
                        
                        <div className="p-4 hover:bg-gray-50 cursor-pointer">
                          <div className="flex items-center gap-2">
                            <CalendarDays className="h-4 w-4 text-nilotic" />
                            <h3 className="font-medium">Ceremony Planning</h3>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">15 Members Active</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="md:col-span-2">
                  <Card className="h-full flex flex-col">
                    <CardHeader className="border-b">
                      <div className="flex justify-between items-center">
                        <div>
                          <CardTitle>Warriors' Assembly</CardTitle>
                          <CardDescription>Discussion on upcoming training</CardDescription>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="bg-green-500 h-2 w-2 rounded-full"></div>
                          <span className="text-xs text-gray-500">23 online</span>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="flex-grow overflow-auto p-0">
                      <ScrollArea className="h-64 p-4">
                        <div className="space-y-4">
                          <div className="flex gap-3">
                            <div className="flex-shrink-0 h-8 w-8 bg-nilotic text-white rounded-full flex items-center justify-center">
                              <User className="h-4 w-4" />
                            </div>
                            <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                              <p className="text-xs text-gray-500 mb-1">Ole Lenku, Senior Warrior</p>
                              <p className="text-sm">The young men from Ilmeshuki need more training before the rainy season begins. Who can lead the spear throwing sessions?</p>
                            </div>
                          </div>
                          
                          <div className="flex gap-3 justify-end">
                            <div className="bg-nilotic/20 rounded-lg p-3 max-w-[80%]">
                              <p className="text-xs text-gray-500 mb-1">You</p>
                              <p className="text-sm">I can lead the morning sessions for the next two weeks. My cattle are in the highlands with my brothers watching them.</p>
                            </div>
                            <div className="flex-shrink-0 h-8 w-8 bg-nilotic text-white rounded-full flex items-center justify-center">
                              <User className="h-4 w-4" />
                            </div>
                          </div>
                          
                          <div className="flex gap-3">
                            <div className="flex-shrink-0 h-8 w-8 bg-nilotic text-white rounded-full flex items-center justify-center">
                              <User className="h-4 w-4" />
                            </div>
                            <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                              <p className="text-xs text-gray-500 mb-1">Kipkorir, Warrior Trainer</p>
                              <p className="text-sm">We need to coordinate with the elders about the ritual blessing before training begins. Who will speak with Ole Saikong?</p>
                            </div>
                          </div>
                          
                          <div className="flex gap-3">
                            <div className="flex-shrink-0 h-8 w-8 bg-nilotic text-white rounded-full flex items-center justify-center">
                              <User className="h-4 w-4" />
                            </div>
                            <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                              <p className="text-xs text-gray-500 mb-1">Lemaiyan, Age-Set Leader</p>
                              <p className="text-sm">I will speak with the council of elders tomorrow at the morning meeting. We should also discuss the equipment needed for training.</p>
                            </div>
                          </div>
                        </div>
                      </ScrollArea>
                    </CardContent>
                    
                    <div className="p-4 border-t">
                      <div className="flex gap-2">
                        <input 
                          type="text" 
                          className="flex-grow rounded-md border px-3 py-2 text-sm"
                          placeholder="Type your message..." 
                        />
                        <Button>Send</Button>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
              
              <Section title="Deliberation Protocols">
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-nilotic/10 text-nilotic p-3 rounded-lg">
                          <MessageSquare className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">Speaking Order</h3>
                          <p className="text-gray-600">Traditional Nilotic council discussions follow specific protocols:</p>
                          <ul className="list-disc ml-5 mt-2 text-sm">
                            <li>Elders speak first, beginning with the most senior</li>
                            <li>Warriors speak after elders have given their wisdom</li>
                            <li>Women's council representatives present community perspectives</li>
                            <li>Final decisions require consensus rather than majority rule</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="bg-nilotic/10 text-nilotic p-3 rounded-lg">
                          <Shield className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">Decision Types</h3>
                          <p className="text-gray-600">Different matters require different deliberation methods:</p>
                          <ul className="list-disc ml-5 mt-2 text-sm">
                            <li><span className="font-medium">Resource allocation</span>: Open discussion followed by elder council final decision</li>
                            <li><span className="font-medium">Conflict resolution</span>: Both parties speak, then neutral elders deliberate</li>
                            <li><span className="font-medium">Ceremonies</span>: Age-set leaders propose, elders approve details</li>
                            <li><span className="font-medium">Community defense</span>: Warrior leaders propose, all adult men participate in decision</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Section>
            </TabsContent>
            
            <TabsContent value="water-tracker" className="border rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-6">Water & Grazing Tracker</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Water Resources</CardTitle>
                    <CardDescription>Current water availability for herds</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <h4 className="font-medium">Eastern River Basin</h4>
                          <span className="text-green-600 text-sm">Abundant</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <h4 className="font-medium">Northern Wells</h4>
                          <span className="text-amber-600 text-sm">Limited</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-amber-500 h-2 rounded-full" style={{ width: '35%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <h4 className="font-medium">Southern Springs</h4>
                          <span className="text-red-600 text-sm">Critical</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-red-500 h-2 rounded-full" style={{ width: '15%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <h4 className="font-medium">Western Dam</h4>
                          <span className="text-green-600 text-sm">Good</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t">
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-gray-500">Last Updated: March 12, 2023</p>
                        <Button size="sm" variant="outline">Update Data</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Grazing Conditions</CardTitle>
                    <CardDescription>Pasture quality in traditional territories</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-white border rounded p-3">
                        <div className="flex justify-between">
                          <h4 className="font-medium">Highland Pastures</h4>
                          <div className="flex items-center">
                            <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                            <span className="text-sm">Excellent</span>
                          </div>
                        </div>
                        <p className="text-sm mt-1">Recent rains have revitalized grasses; suitable for all cattle.</p>
                      </div>
                      
                      <div className="bg-white border rounded p-3">
                        <div className="flex justify-between">
                          <h4 className="font-medium">Central Plains</h4>
                          <div className="flex items-center">
                            <div className="h-3 w-3 rounded-full bg-amber-500 mr-2"></div>
                            <span className="text-sm">Moderate</span>
                          </div>
                        </div>
                        <p className="text-sm mt-1">Medium grass height but diminishing; best for adult cattle only.</p>
                      </div>
                      
                      <div className="bg-white border rounded p-3">
                        <div className="flex justify-between">
                          <h4 className="font-medium">Southern Savanna</h4>
                          <div className="flex items-center">
                            <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
                            <span className="text-sm">Poor</span>
                          </div>
                        </div>
                        <p className="text-sm mt-1">Drought conditions persisting; not recommended for grazing.</p>
                      </div>
                      
                      <div className="bg-white border rounded p-3">
                        <div className="flex justify-between">
                          <h4 className="font-medium">Eastern Woodlands</h4>
                          <div className="flex items-center">
                            <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                            <span className="text-sm">Good</span>
                          </div>
                        </div>
                        <p className="text-sm mt-1">Protected areas with consistent coverage; suitable for all herds.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Section title="Migration Recommendations">
                <Card className="border border-nilotic">
                  <CardHeader className="bg-nilotic/10">
                    <CardTitle>Current Migration Advisory</CardTitle>
                    <CardDescription>Based on traditional knowledge and current conditions</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-lg">Primary Recommendation</h3>
                        <p className="mt-1">Move herds from Southern Savanna to Highland Pastures within the next two weeks.</p>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold">Reasoning</h3>
                        <ul className="list-disc ml-5 mt-2">
                          <li>Continued drought in Southern territories with no rainfall predicted</li>
                          <li>Highland pastures showing excellent recovery after early rains</li>
                          <li>Traditional migration routes to highlands now clear of predators</li>
                          <li>Water sources along migration path are sufficient for journey</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold">Community Coordination</h3>
                        <p className="mt-1">The following clans have confirmed highland migration plans:</p>
                        <div className="flex gap-2 mt-2 flex-wrap">
                          <span className="bg-nilotic/10 px-2 py-1 rounded text-xs">Lotuko (March 20)</span>
                          <span className="bg-nilotic/10 px-2 py-1 rounded text-xs">Turkana (March 22)</span>
                          <span className="bg-nilotic/10 px-2 py-1 rounded text-xs">Karamojong (March 25)</span>
                          <span className="bg-nilotic/10 px-2 py-1 rounded text-xs">Dinka (April 1)</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-end">
                        <Button>Register Your Migration Plan</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Section>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="font-bold text-lg">AEGIS Kenya</h3>
              <p className="text-gray-400">Preserving Nilotic wisdom digitally</p>
            </div>
            
            <div className="flex space-x-4">
              <a href="/" className="text-gray-400 hover:text-white">Home</a>
              <a href="/bantu-heritage" className="text-gray-400 hover:text-white">Bantu</a>
              <a href="/nilotic-wisdom" className="text-gray-400 hover:text-white">Nilotic</a>
              <a href="/cushitic-trade" className="text-gray-400 hover:text-white">Cushitic</a>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} AEGIS Kenya Cultural Dashboard. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NiloticWisdom;
