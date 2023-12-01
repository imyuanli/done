import {Input} from "@/components/ui/input";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {LayoutGrid, LayoutList, Plus} from "lucide-react";
import {Button} from "@/components/ui/button";

export default function Project() {
    return (
        <section className="container">
            <Tabs defaultValue="card">
               <div className={'flex items-center space-x-4'}>
                   <Input placeholder={'search project...'}/>
                   <TabsList>
                       <TabsTrigger value="card">
                           <LayoutGrid />
                       </TabsTrigger>
                       <TabsTrigger value="list">
                           <LayoutList />
                       </TabsTrigger>
                   </TabsList>
                   <Button className={'aspect-square'} size={'icon'}>
                       <Plus/>
                   </Button>
               </div>
                <TabsContent value="card">
                    card
                </TabsContent>
                <TabsContent value="list">
                    list
                </TabsContent>
            </Tabs>
        </section>
    )
}
