
import React from 'react';
import Header from '@/components/Header';
import Section from '@/components/Section';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from '@/components/ui/button';
import { MapPin, Mic, BookOpen, Star, PlayCircle, Share2, PauseCircle, Map, BarChart3 } from 'lucide-react';

const CushiticTrade = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Banner */}
        <div className="cushitic-theme cultural-pattern py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Cushitic Trade</h1>
              <p className="text-xl opacity-90">Preserve your migration history, oral traditions, and trade networks</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-12">
          <Tabs defaultValue="migration-mapping">
            <div className="mb-6">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <TabsTrigger value="migration-mapping" className="text-center">
                  <Map className="h-4 w-4 mr-2" />
                  Migration Mapping
                </TabsTrigger>
                <TabsTrigger value="oral-storytelling" className="text-center">
                  <Mic className="h-4 w-4 mr-2" />
                  Oral Storytelling
                </TabsTrigger>
                <TabsTrigger value="traditional-medicine" className="text-center">
                  <Star className="h-4 w-4 mr-2" />
                  Traditional Medicine
                </TabsTrigger>
                <TabsTrigger value="trade-ledger" className="text-center">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Trade Ledger
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="migration-mapping" className="border rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-6">Migration Mapping Tool</h2>

              <div className="bg-cushitic/10 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-semibold mb-2">Migration Wisdom</h3>
                <blockquote className="italic border-l-4 border-cushitic pl-4">
                  "A nomad knows a thousand paths to water, a settler knows only one."
                  <footer className="text-sm mt-2">— Somali Proverb</footer>
                </blockquote>
              </div>
              
              <div className="mb-10">
                <Card>
                  <CardHeader>
                    <CardTitle>Family Migration Routes</CardTitle>
                    <CardDescription>Historical movements across generations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center mb-4">
                      <div className="text-center">
                        <MapPin className="h-10 w-10 text-cushitic opacity-50 mx-auto mb-2" />
                        <p className="text-gray-500">Migration map visualization will appear here</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                      <div className="bg-white border rounded p-3">
                        <h4 className="font-medium">1950-1960</h4>
                        <p className="text-sm">Northern Kenya to Eastern Territories</p>
                        <p className="text-xs text-gray-500 mt-1">Drought migration</p>
                      </div>
                      
                      <div className="bg-white border rounded p-3">
                        <h4 className="font-medium">1975-1985</h4>
                        <p className="text-sm">Eastern to Southern Territories</p>
                        <p className="text-xs text-gray-500 mt-1">Trade expansion</p>
                      </div>
                      
                      <div className="bg-white border rounded p-3">
                        <h4 className="font-medium">2000-Present</h4>
                        <p className="text-sm">Seasonal movements within South</p>
                        <p className="text-xs text-gray-500 mt-1">Established patterns</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button>Add Migration Data</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Section title="Geo-Tagged Historical Points">
                <div className="space-y-4">
                  <div className="bg-white rounded-lg border overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="bg-cushitic/10 p-4 flex items-center justify-center md:w-1/4">
                        <MapPin className="h-10 w-10 text-cushitic" />
                      </div>
                      <div className="p-4 md:w-3/4">
                        <div className="flex justify-between items-start">
                          <h3 className="font-semibold">Great Drought Settlement</h3>
                          <span className="bg-cushitic/10 text-cushitic text-xs px-2 py-1 rounded">1963-1967</span>
                        </div>
                        <p className="mt-2 text-sm">The temporary settlement established during the harsh drought of the 1960s. Five clans converged here to share resources and support each other through difficult times.</p>
                        <div className="mt-3 flex items-center text-sm text-gray-500">
                          <MapPin className="h-3 w-3 mr-1" />
                          <span>Northern Kenya, near Lake Turkana</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg border overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="bg-cushitic/10 p-4 flex items-center justify-center md:w-1/4">
                        <MapPin className="h-10 w-10 text-cushitic" />
                      </div>
                      <div className="p-4 md:w-3/4">
                        <div className="flex justify-between items-start">
                          <h3 className="font-semibold">Trading Junction Point</h3>
                          <span className="bg-cushitic/10 text-cushitic text-xs px-2 py-1 rounded">1980-1995</span>
                        </div>
                        <p className="mt-2 text-sm">Key marketplace where Cushitic traders established regular commerce with Bantu agricultural communities. Known for valuable exchanges of livestock for grain and tools.</p>
                        <div className="mt-3 flex items-center text-sm text-gray-500">
                          <MapPin className="h-3 w-3 mr-1" />
                          <span>Eastern Province, Garissa Region</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg border overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="bg-cushitic/10 p-4 flex items-center justify-center md:w-1/4">
                        <MapPin className="h-10 w-10 text-cushitic" />
                      </div>
                      <div className="p-4 md:w-3/4">
                        <div className="flex justify-between items-start">
                          <h3 className="font-semibold">Modern Settlement</h3>
                          <span className="bg-cushitic/10 text-cushitic text-xs px-2 py-1 rounded">2005-Present</span>
                        </div>
                        <p className="mt-2 text-sm">Permanent community established with access to both traditional pastoral areas and modern infrastructure. Features seasonal migration patterns for cattle but maintains central family home.</p>
                        <div className="mt-3 flex items-center text-sm text-gray-500">
                          <MapPin className="h-3 w-3 mr-1" />
                          <span>North Eastern Province</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Section>
            </TabsContent>
            
            <TabsContent value="oral-storytelling" className="border rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-6">Oral Storytelling Vault</h2>
              
              <div className="mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Voice-to-Text Recording</CardTitle>
                    <CardDescription>Preserve ancestral stories and wisdom</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-100 rounded-lg p-6 mb-6 text-center">
                      <div className="flex justify-center mb-4">
                        <Mic className="h-12 w-12 text-cushitic" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Elder Story Mode</h3>
                      <p className="mb-4 text-gray-600 max-w-lg mx-auto">Record the oral histories from your elders. Our system will transcribe, translate, and archive them for future generations.</p>
                      <div className="flex justify-center gap-4">
                        <Button variant="outline">
                          <Mic className="h-4 w-4 mr-2" />
                          Start Recording
                        </Button>
                        <Button>
                          <PlayCircle className="h-4 w-4 mr-2" />
                          Upload Existing
                        </Button>
                      </div>
                    </div>
                    
                    <div className="border-t pt-4">
                      <h3 className="font-medium mb-3">Recording Tips</h3>
                      <ul className="list-disc ml-5 space-y-2 text-sm">
                        <li>Find a quiet space with minimal background noise</li>
                        <li>Position the elder comfortably where they can speak naturally</li>
                        <li>Begin with basic information: elder's name, age, clan, and story context</li>
                        <li>Don't interrupt the flow of storytelling</li>
                        <li>Consider recording in both native language and translation if possible</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Section title="Story Archive">
                <div className="space-y-4">
                  <Card className="overflow-hidden">
                    <div className="bg-cushitic text-white p-3">
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold">The Great Migration</h3>
                        <span className="bg-white/20 text-white text-xs px-2 py-1 rounded">Historical</span>
                      </div>
                      <p className="text-sm text-white/70">Recorded by Elder Hassan, Age 87</p>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-3">
                          <Button variant="outline" size="sm" className="h-8 w-8 p-0 rounded-full">
                            <PlayCircle className="h-4 w-4" />
                          </Button>
                          <div className="bg-gray-200 h-1 w-32 rounded-full overflow-hidden">
                            <div className="bg-cushitic h-full w-1/3"></div>
                          </div>
                          <span className="text-xs text-gray-500">12:34</span>
                        </div>
                        <div>
                          <Button variant="ghost" size="sm">
                            <Share2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <ScrollArea className="h-24">
                        <p className="text-sm">
                          "In the time of my grandfather's grandfather, we came from the great northern plains. The drought had lasted three seasons, and the elders gathered to discuss our future. The seer, an old woman named Habiba, had dreamed of green lands near a great lake..."
                        </p>
                      </ScrollArea>
                      <div className="mt-4 pt-4 border-t flex items-center justify-between">
                        <div className="text-xs text-gray-500">Recorded: January 15, 2023</div>
                        <Button variant="outline" size="sm">View Full Transcript</Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="overflow-hidden">
                    <div className="bg-cushitic text-white p-3">
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold">The Water Finding Song</h3>
                        <span className="bg-white/20 text-white text-xs px-2 py-1 rounded">Cultural</span>
                      </div>
                      <p className="text-sm text-white/70">Recorded by Elder Amina, Age 79</p>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-3">
                          <Button variant="outline" size="sm" className="h-8 w-8 p-0 rounded-full">
                            <PauseCircle className="h-4 w-4" />
                          </Button>
                          <div className="bg-gray-200 h-1 w-32 rounded-full overflow-hidden">
                            <div className="bg-cushitic h-full w-3/4"></div>
                          </div>
                          <span className="text-xs text-gray-500">5:18</span>
                        </div>
                        <div>
                          <Button variant="ghost" size="sm">
                            <Share2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <ScrollArea className="h-24">
                        <p className="text-sm">
                          "This is the water finding song that has been passed down through generations. When nomads need to locate water in new territories, this song helps remember the signs of hidden springs. Look for the small bird with red wings, he always nests near water..."
                        </p>
                      </ScrollArea>
                      <div className="mt-4 pt-4 border-t flex items-center justify-between">
                        <div className="text-xs text-gray-500">Recorded: February 3, 2023</div>
                        <Button variant="outline" size="sm">View Full Transcript</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </Section>
            </TabsContent>

            <TabsContent value="traditional-medicine" className="border rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-6">Traditional Medicine Ledger</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Medicinal Knowledge</CardTitle>
                    <CardDescription>Documented remedies and treatments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-96">
                      <div className="space-y-6">
                        <div className="border-b pb-4">
                          <div className="flex items-start gap-3">
                            <div className="bg-cushitic/10 p-3 rounded-lg">
                              <Star className="h-5 w-5 text-cushitic" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-lg">Desert Rose (Adenium obesum)</h3>
                              <div className="flex flex-wrap gap-2 mt-1 mb-2">
                                <span className="bg-cushitic/10 text-cushitic px-2 py-0.5 text-xs rounded">Fever</span>
                                <span className="bg-cushitic/10 text-cushitic px-2 py-0.5 text-xs rounded">Skin Conditions</span>
                                <span className="bg-cushitic/10 text-cushitic px-2 py-0.5 text-xs rounded">Pain Relief</span>
                              </div>
                              <p className="text-sm">The sap from the stems, when properly prepared by experienced healers, can be applied externally for skin conditions. Internal use requires extensive knowledge as the plant contains toxic compounds.</p>
                              <div className="mt-2 text-sm text-gray-500 flex items-center gap-1">
                                <BookOpen className="h-3 w-3" />
                                <span>Recorded by Elder Halima (2021)</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="border-b pb-4">
                          <div className="flex items-start gap-3">
                            <div className="bg-cushitic/10 p-3 rounded-lg">
                              <Star className="h-5 w-5 text-cushitic" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-lg">Sodom Apple (Calotropis procera)</h3>
                              <div className="flex flex-wrap gap-2 mt-1 mb-2">
                                <span className="bg-cushitic/10 text-cushitic px-2 py-0.5 text-xs rounded">Respiratory</span>
                                <span className="bg-cushitic/10 text-cushitic px-2 py-0.5 text-xs rounded">Digestive</span>
                                <span className="bg-cushitic/10 text-cushitic px-2 py-0.5 text-xs rounded">Toothache</span>
                              </div>
                              <p className="text-sm">The root bark is used for respiratory conditions when prepared in a special tea. The milky latex is carefully applied to treat toothaches and certain skin conditions. Warning: Must be properly processed to avoid irritation.</p>
                              <div className="mt-2 text-sm text-gray-500 flex items-center gap-1">
                                <BookOpen className="h-3 w-3" />
                                <span>Recorded by Elder Ahmed (2019)</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="border-b pb-4">
                          <div className="flex items-start gap-3">
                            <div className="bg-cushitic/10 p-3 rounded-lg">
                              <Star className="h-5 w-5 text-cushitic" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-lg">Myrrh (Commiphora myrrha)</h3>
                              <div className="flex flex-wrap gap-2 mt-1 mb-2">
                                <span className="bg-cushitic/10 text-cushitic px-2 py-0.5 text-xs rounded">Antiseptic</span>
                                <span className="bg-cushitic/10 text-cushitic px-2 py-0.5 text-xs rounded">Oral Health</span>
                                <span className="bg-cushitic/10 text-cushitic px-2 py-0.5 text-xs rounded">Digestive</span>
                              </div>
                              <p className="text-sm">The resin collected from the tree has powerful antiseptic properties. Used as a mouthwash for gum problems by dissolving small amounts in warm water. Also used in small quantities for digestive troubles.</p>
                              <div className="mt-2 text-sm text-gray-500 flex items-center gap-1">
                                <BookOpen className="h-3 w-3" />
                                <span>Recorded by Elder Fatima (2022)</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex items-start gap-3">
                            <div className="bg-cushitic/10 p-3 rounded-lg">
                              <Star className="h-5 w-5 text-cushitic" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-lg">Acacia (Acacia senegal)</h3>
                              <div className="flex flex-wrap gap-2 mt-1 mb-2">
                                <span className="bg-cushitic/10 text-cushitic px-2 py-0.5 text-xs rounded">Wounds</span>
                                <span className="bg-cushitic/10 text-cushitic px-2 py-0.5 text-xs rounded">Eye Infections</span>
                                <span className="bg-cushitic/10 text-cushitic px-2 py-0.5 text-xs rounded">Cough</span>
                              </div>
                              <p className="text-sm">The gum from this tree is dissolved in water to create a solution for eye infections. The bark can be boiled to make a tea for coughs and respiratory problems. Fresh sap is applied directly to wounds to promote healing.</p>
                              <div className="mt-2 text-sm text-gray-500 flex items-center gap-1">
                                <BookOpen className="h-3 w-3" />
                                <span>Recorded by Elder Ibrahim (2020)</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Add New Knowledge</CardTitle>
                    <CardDescription>Document a traditional remedy</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Plant/Material Name</label>
                        <input 
                          type="text"
                          className="w-full rounded-md border px-3 py-2 text-sm"
                          placeholder="Traditional and scientific names if known"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-1">Uses</label>
                        <div className="flex flex-wrap gap-2 mb-2">
                          <span className="bg-gray-100 px-2 py-0.5 text-xs rounded flex items-center">
                            Fever <button className="ml-1 text-gray-500">×</button>
                          </span>
                          <span className="bg-gray-100 px-2 py-0.5 text-xs rounded flex items-center">
                            Pain <button className="ml-1 text-gray-500">×</button>
                          </span>
                        </div>
                        <input 
                          type="text"
                          className="w-full rounded-md border px-3 py-2 text-sm"
                          placeholder="Add another use"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-1">Preparation Method</label>
                        <textarea
                          className="w-full rounded-md border px-3 py-2 text-sm"
                          rows={4}
                          placeholder="Describe how to prepare and use this remedy"
                        ></textarea>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-1">Elder Source</label>
                        <input 
                          type="text"
                          className="w-full rounded-md border px-3 py-2 text-sm"
                          placeholder="Who shared this knowledge"
                        />
                      </div>
                      
                      <div className="pt-2">
                        <Button className="w-full">Save to Ledger</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Section title="Traditional Healers' Directory">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg border overflow-hidden">
                    <div className="bg-cushitic p-3 text-white">
                      <h3 className="font-semibold">Elder Halima Omar</h3>
                    </div>
                    <div className="p-4">
                      <p className="text-sm mb-2">Specializes in women's health and pediatric remedies. Known for her extensive knowledge of desert plants.</p>
                      <div className="text-sm text-gray-500 space-y-1">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          <span>Garissa Region</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <BookOpen className="h-3 w-3" />
                          <span>76 Documented Remedies</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg border overflow-hidden">
                    <div className="bg-cushitic p-3 text-white">
                      <h3 className="font-semibold">Elder Ahmed Hussein</h3>
                    </div>
                    <div className="p-4">
                      <p className="text-sm mb-2">Expert in treating livestock ailments and human digestive issues. Practices traditional bone setting techniques.</p>
                      <div className="text-sm text-gray-500 space-y-1">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          <span>Wajir County</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <BookOpen className="h-3 w-3" />
                          <span>54 Documented Remedies</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg border overflow-hidden">
                    <div className="bg-cushitic p-3 text-white">
                      <h3 className="font-semibold">Elder Ibrahim Ali</h3>
                    </div>
                    <div className="p-4">
                      <p className="text-sm mb-2">Specialist in respiratory conditions and spiritual healing practices. Knowledgeable about seasonal medicinal plants.</p>
                      <div className="text-sm text-gray-500 space-y-1">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          <span>Marsabit County</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <BookOpen className="h-3 w-3" />
                          <span>62 Documented Remedies</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Section>
            </TabsContent>
            
            <TabsContent value="trade-ledger" className="border rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-6">Long-Distance Trade & Barter Ledger</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Trade Network</CardTitle>
                    <CardDescription>Traditional trading partners and routes</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-white border rounded p-3">
                        <div className="flex justify-between">
                          <h4 className="font-medium">Coastal Swahili Traders</h4>
                          <div className="bg-green-100 text-green-800 px-2 py-0.5 rounded text-xs">Active</div>
                        </div>
                        <p className="text-sm mt-1">Long-established trading relationship for exchanging livestock for textiles and spices.</p>
                        <div className="mt-2 flex items-center gap-4 text-sm">
                          <div className="flex items-center">
                            <MapPin className="h-3 w-3 text-gray-500 mr-1" />
                            <span className="text-gray-500">Coastal Region</span>
                          </div>
                          <div className="flex items-center">
                            <BarChart3 className="h-3 w-3 text-gray-500 mr-1" />
                            <span className="text-gray-500">24 Exchanges Recorded</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white border rounded p-3">
                        <div className="flex justify-between">
                          <h4 className="font-medium">Kikuyu Farmers</h4>
                          <div className="bg-green-100 text-green-800 px-2 py-0.5 rounded text-xs">Active</div>
                        </div>
                        <p className="text-sm mt-1">Seasonal exchange of livestock products for agricultural goods and tools.</p>
                        <div className="mt-2 flex items-center gap-4 text-sm">
                          <div className="flex items-center">
                            <MapPin className="h-3 w-3 text-gray-500 mr-1" />
                            <span className="text-gray-500">Central Highlands</span>
                          </div>
                          <div className="flex items-center">
                            <BarChart3 className="h-3 w-3 text-gray-500 mr-1" />
                            <span className="text-gray-500">36 Exchanges Recorded</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white border rounded p-3">
                        <div className="flex justify-between">
                          <h4 className="font-medium">Ethiopian Merchants</h4>
                          <div className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded text-xs">Seasonal</div>
                        </div>
                        <p className="text-sm mt-1">Bi-annual trading meetings for specialty goods, textiles, and livestock exchange.</p>
                        <div className="mt-2 flex items-center gap-4 text-sm">
                          <div className="flex items-center">
                            <MapPin className="h-3 w-3 text-gray-500 mr-1" />
                            <span className="text-gray-500">Northern Border</span>
                          </div>
                          <div className="flex items-center">
                            <BarChart3 className="h-3 w-3 text-gray-500 mr-1" />
                            <span className="text-gray-500">12 Exchanges Recorded</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white border rounded p-3">
                        <div className="flex justify-between">
                          <h4 className="font-medium">Maasai Herders</h4>
                          <div className="bg-green-100 text-green-800 px-2 py-0.5 rounded text-xs">Active</div>
                        </div>
                        <p className="text-sm mt-1">Exchange of cattle breeds and traditional medicines.</p>
                        <div className="mt-2 flex items-center gap-4 text-sm">
                          <div className="flex items-center">
                            <MapPin className="h-3 w-3 text-gray-500 mr-1" />
                            <span className="text-gray-500">Rift Valley</span>
                          </div>
                          <div className="flex items-center">
                            <BarChart3 className="h-3 w-3 text-gray-500 mr-1" />
                            <span className="text-gray-500">18 Exchanges Recorded</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Transactions</CardTitle>
                    <CardDescription>Documented trade activities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-72">
                      <div className="space-y-4">
                        <div className="border-b pb-3">
                          <div className="flex justify-between">
                            <h4 className="font-medium">Livestock Exchange</h4>
                            <span className="text-xs text-gray-500">March 5, 2023</span>
                          </div>
                          <div className="mt-2 grid grid-cols-2 gap-x-4 text-sm">
                            <div>
                              <p className="text-gray-500">Traded Out:</p>
                              <p>4 Goats, 2 Sheep</p>
                            </div>
                            <div>
                              <p className="text-gray-500">Received:</p>
                              <p>50kg Maize, Farming Tools</p>
                            </div>
                          </div>
                          <p className="mt-2 text-xs text-gray-500">Partner: Kikuyu Farmers Association</p>
                        </div>
                        
                        <div className="border-b pb-3">
                          <div className="flex justify-between">
                            <h4 className="font-medium">Medicinal Plants Exchange</h4>
                            <span className="text-xs text-gray-500">February 18, 2023</span>
                          </div>
                          <div className="mt-2 grid grid-cols-2 gap-x-4 text-sm">
                            <div>
                              <p className="text-gray-500">Traded Out:</p>
                              <p>Desert Rose Extract, Acacia Resin</p>
                            </div>
                            <div>
                              <p className="text-gray-500">Received:</p>
                              <p>Highland Herbal Remedies, Honey</p>
                            </div>
                          </div>
                          <p className="mt-2 text-xs text-gray-500">Partner: Elder Njenga (Bantu Medicine Man)</p>
                        </div>
                        
                        <div className="border-b pb-3">
                          <div className="flex justify-between">
                            <h4 className="font-medium">Textile Exchange</h4>
                            <span className="text-xs text-gray-500">January 24, 2023</span>
                          </div>
                          <div className="mt-2 grid grid-cols-2 gap-x-4 text-sm">
                            <div>
                              <p className="text-gray-500">Traded Out:</p>
                              <p>Leather Goods, Camel Milk Products</p>
                            </div>
                            <div>
                              <p className="text-gray-500">Received:</p>
                              <p>Cotton Textiles, Dyes</p>
                            </div>
                          </div>
                          <p className="mt-2 text-xs text-gray-500">Partner: Coastal Traders Association</p>
                        </div>
                        
                        <div>
                          <div className="flex justify-between">
                            <h4 className="font-medium">Cattle Breeding Exchange</h4>
                            <span className="text-xs text-gray-500">December 12, 2022</span>
                          </div>
                          <div className="mt-2 grid grid-cols-2 gap-x-4 text-sm">
                            <div>
                              <p className="text-gray-500">Traded Out:</p>
                              <p>2 Boran Bulls</p>
                            </div>
                            <div>
                              <p className="text-gray-500">Received:</p>
                              <p>1 Maasai Zebu Bull, Beaded Ornaments</p>
                            </div>
                          </div>
                          <p className="mt-2 text-xs text-gray-500">Partner: Maasai Herders Collective</p>
                        </div>
                      </div>
                    </ScrollArea>
                    <div className="mt-4 pt-4 border-t flex justify-between">
                      <span className="text-sm text-gray-500">Showing recent 4 of 90 transactions</span>
                      <Button variant="outline" size="sm">View All</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Section title="Record New Transaction">
                <Card>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="font-medium">Outgoing Items</h3>
                        <div>
                          <label className="block text-sm font-medium mb-1">Item Category</label>
                          <select className="w-full rounded-md border px-3 py-2 text-sm">
                            <option>Livestock</option>
                            <option>Dairy Products</option>
                            <option>Leather Goods</option>
                            <option>Medicinal Items</option>
                            <option>Other</option>
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium mb-1">Description</label>
                          <input 
                            type="text"
                            className="w-full rounded-md border px-3 py-2 text-sm"
                            placeholder="Item details and quantities"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium mb-1">Estimated Value</label>
                          <input 
                            type="text"
                            className="w-full rounded-md border px-3 py-2 text-sm"
                            placeholder="Traditional or modern value"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="font-medium">Incoming Items</h3>
                        <div>
                          <label className="block text-sm font-medium mb-1">Item Category</label>
                          <select className="w-full rounded-md border px-3 py-2 text-sm">
                            <option>Agricultural Goods</option>
                            <option>Textiles</option>
                            <option>Tools/Implements</option>
                            <option>Medicinal Items</option>
                            <option>Other</option>
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium mb-1">Description</label>
                          <input 
                            type="text"
                            className="w-full rounded-md border px-3 py-2 text-sm"
                            placeholder="Item details and quantities"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium mb-1">Trading Partner</label>
                          <input 
                            type="text"
                            className="w-full rounded-md border px-3 py-2 text-sm"
                            placeholder="Individual or community name"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 flex justify-end">
                      <Button>Record Transaction</Button>
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
              <p className="text-gray-400">Preserving Cushitic traditions digitally</p>
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

export default CushiticTrade;
