import 'dotenv/config'
import { RingApi } from 'ring-client-api'
import { cleanOutputDirectory, outputDirectory } from './util'
import * as path from 'path'


export class Ring {
    ringApi: RingApi;

    constructor(refreshToken: string, debug: boolean = false) {
        this.ringApi = new RingApi({
            refreshToken,
            debug
        });
        
    }

    /**
     * This example records a 10 second video clip to output/example.mp4
     **/
    public async saveSnippet(length: number, filePath: string): Promise<void> {
        const cameras = await this.ringApi.getCameras();
        const camera = cameras[0];
    
        if (!camera) {
            console.log('No cameras found')
            return
        }
    
        // clean/create the output directory
        await cleanOutputDirectory()
    
        console.log('Starting Video...')
        await camera.recordToFile(path.join(outputDirectory, filePath), length)
        console.log('Done recording video')
        process.exit(0)
    }
}

