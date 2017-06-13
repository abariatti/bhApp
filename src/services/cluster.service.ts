import { Injectable } from '@angular/core';
import { Cluster } from "../models/cluster";
import { Headers, Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ClusterService {
    private clustersUrl = 'api/clusters';  // URL to web api
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    getClusters(): Promise<Cluster[]> {
        return this.http.get(this.clustersUrl)
            .toPromise()
            .then(response => response.json().data as Cluster[])
            .catch(this.handleError);
    }

    getCluster(id: number): Promise<Cluster> {
        const url = `${this.clustersUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Cluster)
            .catch(this.handleError);
    }

    update(cluster: Cluster): Promise<Cluster> {
        const url = `${this.clustersUrl}/${cluster.id}`;
        return this.http
            .put(url, JSON.stringify(cluster), {headers: this.headers})
            .toPromise()
            .then(() => cluster)
            .catch(this.handleError);
    }

    create(cluster: Cluster): Promise<Cluster> {
        return this.http
            .post(this.clustersUrl, JSON.stringify(cluster), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data as Cluster)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.clustersUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}