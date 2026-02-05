import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Directory, Encoding, Filesystem, FilesystemDirectory } from '@capacitor/filesystem';
import { LocalNotifications } from '@capacitor/local-notifications';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class Tab4Page {
  imageUrl: string | undefined;

  async takePicture() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera
      });

      if (image && image.dataUrl) {
        this.imageUrl = image.dataUrl; // Set the captured image URL
        this.showNotification();
        await this.saveImage(); // Automatically save the image after capturing
      }

    } catch (e) {
      console.error('Error taking photo:', e);
    }
  }

  async showNotification() {
    // Notification logic will go here

    const granted = await LocalNotifications.requestPermissions();
    if (!granted) {
      console.error('Notification permissions not granted');
      return;
    }
    
    await LocalNotifications.schedule({
      notifications: [
        {
          title: "Picture Taken",
          body: "Your picture has been successfully captured!",
          id: 1,
          schedule: { at: new Date(Date.now() + 1000) },
          actionTypeId: "",
          extra: null
        }
      ]
    });
  }

  async saveData() {
  try {
    await Filesystem.writeFile({
      path: 'myData.txt',
      data: 'This is some sample data to save to a file.',
      directory: Directory.Data,
      encoding: Encoding.UTF8,   // ✅ REQUIRED
    });

    alert('Data saved successfully!');
  } catch (e) {
    console.error('Error saving file:', e);
    alert('Failed to save data');
  }
}

  async readData() {
    // Data reading logic will go here
    try {
      const contents = await Filesystem.readFile({
        path: 'myData.txt',
        directory: Directory.Data, // Changed to match saveData
        encoding: Encoding.UTF8
      });
      alert('Data read successfully: ' + contents.data);
    } catch (e) {
      console.error('Error reading file', e);
      alert('Failed to read data');
    }
  }

  async saveImage() {
    try {
      if (!this.imageUrl) {
        alert('No image to save!');
        return;
      }

      const base64Data = this.imageUrl.split(',')[1]; // Extract base64 data
      const path = 'capturedImage.png';
      const directory = Directory.Data;

      await Filesystem.writeFile({
        path,
        data: base64Data,
        directory,
        encoding: Encoding.UTF8
      });

      alert('Image saved successfully!');
    } catch (e) {
      console.error('Error saving image:', e);
      alert('Failed to save image');
    }
  }

  async loadImage() {
    try {
      const path = 'capturedImage.png';
      const directory = Directory.Data;

      const contents = await Filesystem.readFile({
        path,
        directory,
        encoding: Encoding.UTF8
      });

      this.imageUrl = `data:image/png;base64,${contents.data}`; // Reconstruct the image URL
      alert('Image loaded successfully!');
    } catch (e) {
      console.error('Error loading image:', e);
      alert('Failed to load image');
    }
  }
}