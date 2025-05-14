
import React from 'react';
import Header from '@/components/Header';
import Section from '@/components/Section';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from '@/components/ui/button';
import { Calendar, HomeIcon, Map, TreeDeciduous, Users, BookText, Sprout } from 'lucide-react';

const BantuHeritage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Banner */}
        <div className="bantu-theme cultural-pattern py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Bantu Heritage</h1>
              <p className="text-xl opacity-90">Connect with your clan lineages, agricultural traditions, and community wisdom</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-12">
          <Tabs defaultValue="family-tree">
            <div className="mb-6">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <TabsTrigger value="family-tree" className="text-center">
                  <Users className="h-4 w-4 mr-2" />
                  Family Tree
                </TabsTrigger>
                <TabsTrigger value="land-records" className="text-center">
                  <Map className="h-4 w-4 mr-2" />
                  Land Records
                </TabsTrigger>
                <TabsTrigger value="farming-ledger" className="text-center">
                  <Sprout className="h-4 w-4 mr-2" />
                  Farming Ledger
                </TabsTrigger>
                <TabsTrigger value="ritual-calendar" className="text-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  Ritual Calendar
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="family-tree" className="border rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-6">Interactive Family Tree</h2>

              <div className="bg-bantu/10 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-semibold mb-2">Today's Wisdom</h3>
                <blockquote className="italic border-l-4 border-bantu pl-4">
                  "A home without a grandmother is like a road that goes nowhere."
                  <footer className="text-sm mt-2">— Kikuyu Proverb</footer>
                </blockquote>
              </div>
              
              <div className="mb-10">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Family Tree</CardTitle>
                    <CardDescription>Explore your clan connections and lineage</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-center mb-4">
                      <TreeDeciduous className="h-48 w-48 text-bantu opacity-50" />
                    </div>
                    <p className="text-center text-muted-foreground mb-4">Your family tree visualization will appear here.</p>
                    <div className="flex justify-center">
                      <Button variant="outline">Upload Family Records</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Section title="Family Stories & Proverbs">
                <ScrollArea className="h-64 rounded-md border p-4">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold">The Migration Story</h4>
                      <p className="text-gray-600">In the time of our great-grandfathers, the Kamau clan moved from central lands to the eastern slopes because of the great drought. The elders carried sacred calabashes of soil from the ancestral land...</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold">Founding of Murang'a</h4>
                      <p className="text-gray-600">When the first settlers came to what is now Murang'a, they found fertile soil and abundant water. The clan leaders divided the land according to the ancient wisdom, giving each family enough to sustain themselves...</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold">Wisdom Proverbs</h4>
                      <ul className="list-disc ml-5 space-y-2">
                        <li>"When the cooking pot is broken, the family is broken."</li>
                        <li>"A child does not laugh at the ugliness of its mother."</li>
                        <li>"A bird that flies off the earth and lands on an anthill is still on the ground."</li>
                        <li>"A small house will hold a hundred friends."</li>
                      </ul>
                    </div>
                  </div>
                </ScrollArea>
              </Section>
            </TabsContent>
            
            <TabsContent value="land-records" className="space-y-6 border rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-6">Land Records & Conflict Resolution</h2>
              
              <div className="bg-gray-100 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold mb-2">Land Registry</h3>
                <p className="mb-4">Connect with the traditional and modern land records for your ancestral territories.</p>
                
                <div className="bg-white rounded border p-4 mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <HomeIcon className="text-bantu h-5 w-5" />
                    <h4 className="font-medium">Ancestral Land Record #KK-237</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p>Murang'a County, Eastern Ridge</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Size</p>
                      <p>4.8 Acres</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Clan Stewardship</p>
                      <p>Kamau Family (Since 1893)</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Status</p>
                      <p className="text-green-600">Active / In Good Standing</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Button variant="outline" size="sm" className="w-full">View Full Records</Button>
                  </div>
                </div>
                
                <p className="text-sm text-gray-500">Connect additional land records through the chief's office or land registry integration.</p>
              </div>
              
              <Section title="Land Conflict Resolution">
                <Card>
                  <CardHeader>
                    <CardTitle>Resolution System</CardTitle>
                    <CardDescription>Traditional methods for resolving land disputes</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-bantu/10 text-bantu p-2 rounded">1</div>
                        <div>
                          <h4 className="font-semibold">Elder Consultation</h4>
                          <p className="text-sm text-gray-600">Present your case to the council of elders for initial review</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-bantu/10 text-bantu p-2 rounded">2</div>
                        <div>
                          <h4 className="font-semibold">Evidence Collection</h4>
                          <p className="text-sm text-gray-600">Gather oral histories, boundary markers, and witness accounts</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-bantu/10 text-bantu p-2 rounded">3</div>
                        <div>
                          <h4 className="font-semibold">Community Hearing</h4>
                          <p className="text-sm text-gray-600">Formal presentation before elders and affected families</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-bantu/10 text-bantu p-2 rounded">4</div>
                        <div>
                          <h4 className="font-semibold">Resolution Ritual</h4>
                          <p className="text-sm text-gray-600">Ceremonial acknowledgment of boundaries and reconciliation</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Section>
            </TabsContent>

            <TabsContent value="farming-ledger" className="border rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-6">Farming Ledger</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Current Season</CardTitle>
                    <CardDescription>Track your harvest and agricultural activities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Planting Period</h4>
                        <p>March 15 - April 10</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Main Crops</h4>
                        <div className="flex gap-2 mt-1 flex-wrap">
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Maize</span>
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Beans</span>
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Sweet Potato</span>
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Cassava</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Next Harvest Expected</h4>
                        <p>August 20 - September 15</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Economic Tracking</CardTitle>
                    <CardDescription>Manage your agricultural finances</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Last Season Income</h4>
                        <p className="text-2xl font-bold text-green-600">KSh 58,450</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Current Expenses</h4>
                        <p className="text-lg text-red-500">KSh 12,300</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Savings Balance</h4>
                        <p>KSh 24,750</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Section title="Traditional Farming Knowledge">
                <div className="bg-bantu/10 p-6 rounded-lg">
                  <div className="flex gap-4 items-start mb-4">
                    <BookText className="h-8 w-8 text-bantu" />
                    <div>
                      <h3 className="text-lg font-semibold">Seasonal Planting Guide</h3>
                      <p className="text-gray-600">Based on traditional knowledge passed through generations</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="border-b pb-3">
                      <h4 className="font-medium mb-2">Rain Indicators</h4>
                      <ul className="list-disc ml-5 text-sm">
                        <li>When the mugumo tree flowers, prepare your land</li>
                        <li>When small black ants move their eggs higher, rain is coming within 3 days</li>
                        <li>Morning fog settling in valleys indicates a good planting day</li>
                      </ul>
                    </div>
                    
                    <div className="border-b pb-3">
                      <h4 className="font-medium mb-2">Companion Planting</h4>
                      <ul className="list-disc ml-5 text-sm">
                        <li>Plant beans with maize for better yields</li>
                        <li>Surround garden with Mexican marigold to repel pests</li>
                        <li>Alternate rows of sweet potatoes and cassava</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Harvest Rituals</h4>
                      <ul className="list-disc ml-5 text-sm">
                        <li>First harvest offering to elders brings blessing to remaining crop</li>
                        <li>Reserve seed from strongest plants for next planting</li>
                        <li>Celebrate harvest with a community feast to ensure future abundance</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Section>
            </TabsContent>
            
            <TabsContent value="ritual-calendar" className="border rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-6">Ritual Calendar</h2>
              
              <div className="mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Annual Cycle</CardTitle>
                    <CardDescription>Key ceremonies and ancestral observances</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="relative">
                        <div className="absolute left-1.5 top-0 h-full w-0.5 bg-bantu/20"></div>
                        
                        <div className="relative pl-8 pb-6">
                          <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full bg-bantu"></div>
                          <h3 className="font-semibold text-lg">Mbura ya Njahi (Bean Rains)</h3>
                          <p className="text-sm text-gray-500">March - May</p>
                          <p className="mt-1">Planting ceremony and blessings for the long rains. Elders lead prayers at sacred sites, and families prepare fields with traditional methods.</p>
                        </div>
                        
                        <div className="relative pl-8 pb-6">
                          <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full bg-bantu"></div>
                          <h3 className="font-semibold text-lg">Ituĩka Ceremony</h3>
                          <p className="text-sm text-gray-500">June</p>
                          <p className="mt-1">Transfer of authority between generations. Occurs approximately every 30 years, with smaller annual commemorations.</p>
                        </div>
                        
                        <div className="relative pl-8 pb-6">
                          <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full bg-bantu"></div>
                          <h3 className="font-semibold text-lg">Mambura ma Maguna (Harvest Festival)</h3>
                          <p className="text-sm text-gray-500">August - September</p>
                          <p className="mt-1">Celebration of first fruits with offerings to ancestors. Community feast and traditional dances.</p>
                        </div>
                        
                        <div className="relative pl-8">
                          <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full bg-bantu"></div>
                          <h3 className="font-semibold text-lg">Mũgumo Prayer Gathering</h3>
                          <p className="text-sm text-gray-500">December</p>
                          <p className="mt-1">Year-end prayers under sacred fig trees. Community renewal of commitments and resolution of outstanding disputes.</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Section title="Upcoming Rituals">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">Planting Ceremony</h3>
                        <p className="text-sm text-gray-500">March 21, 2023</p>
                      </div>
                      <div className="bg-bantu text-white text-xs px-2 py-1 rounded">Upcoming</div>
                    </div>
                    <p className="mt-2 text-sm">The annual blessing of seeds before planting season begins. Elders will convene at the sacred mugumo tree at sunrise.</p>
                    <div className="mt-3">
                      <Button variant="outline" size="sm">Add to Calendar</Button>
                    </div>
                  </div>
                  
                  <div className="bg-white border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">Children's Naming Ceremony</h3>
                        <p className="text-sm text-gray-500">April 5, 2023</p>
                      </div>
                      <div className="bg-bantu text-white text-xs px-2 py-1 rounded">Upcoming</div>
                    </div>
                    <p className="mt-2 text-sm">Traditional naming of children born in the past year according to family lineage and circumstances of birth.</p>
                    <div className="mt-3">
                      <Button variant="outline" size="sm">Add to Calendar</Button>
                    </div>
                  </div>
                </div>
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
              <p className="text-gray-400">Preserving Bantu heritage digitally</p>
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

export default BantuHeritage;
